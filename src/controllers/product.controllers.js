import productRepository from "../repositories/product.repositories.js";

export async function getAllProducts() {
  try {
  } catch (error) {}
}

export async function addProduct(req, res) {
  try {
    const { name, discount, price, image, quantity } = req.body;
    await productRepository.addProduct(name, discount, price, image, quantity);
    res.send("adicionado no mongo").status(201);
  } catch (error) {
    res.sendStatus(500);
    console.log("falhou no addProduct");
  }
}
