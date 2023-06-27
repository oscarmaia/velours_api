import productService from "../service/product.service.js";

export async function addProduct(req, res) {
  try {
    const { name, discount, price, image, quantity } = req.body;
    await productService.addProduct(name, discount, price, image, quantity);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function getProducts(req, res) {
  try {
    const result = await productService.getProducts();
    if (result) {
      res.send(result).status(200);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function updateProducts(req, res) {
  const { id } = req.params;
  const data = req.body;
  console.log(id);
  try {
    const result = await productService.updateProducts(id, data);
    if (result) {
      res.send(result).status(200);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await productService.deleteProduct(id);
    if (result?.deletedCount === 1) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
