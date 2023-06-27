import { ObjectId } from "mongodb";
import { productsCollection } from "../database/mongo.js";
import productRepository from "../repositories/product.repositories.js";

async function addProduct(name, discount, price, image, quantity) {
  try {
    return await productRepository.addProduct(
      name,
      discount,
      price,
      image,
      quantity
    );
  } catch (error) {
    console.log(error);
  }
}

async function getProducts() {
  try {
    const results = await productRepository.getProducts();
    if (results.length > 0) {
      return results;
    }
  } catch (error) {
    console.log(error);
  }
}

async function updateProducts(id, data) {
  try {
    const itemToBeUpdated = await productsCollection.findOne({
      _id: new ObjectId(id),
    });

    if (itemToBeUpdated) {
      const result = await productRepository.updateProducts(
        itemToBeUpdated._id,
        data
      );
      return result;
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteProduct(id) {
  try {
    const itemToBeDeleted = await productsCollection.findOne({
      _id: new ObjectId(id),
    });

    if (itemToBeDeleted) {
      return await productRepository.deleteProduct(itemToBeDeleted._id);
    }
  } catch (error) {
    console.log(error);
  }
}

const productService = {
  addProduct,
  getProducts,
  updateProducts,
  deleteProduct,
};
export default productService;
