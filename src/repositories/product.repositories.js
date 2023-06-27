import { ObjectId } from "mongodb";
import { productsCollection } from "../database/mongo.js";

async function addProduct(name, discount, price, image, quantity) {
  try {
    await productsCollection.insertOne({
      name,
      discount: parseInt(discount),
      price: parseInt(price),
      image,
      quantity,
    });
  } catch (error) {
    console.log(error);
  }
}

async function getProducts() {
  try {
    return productsCollection.find({}).toArray();
  } catch (error) {
    console.log(error);
  }
}

async function updateProducts(id, data) {
  try {
    return productsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: data }
    );
  } catch (error) {
    console.log(error);
  }
}

async function deleteProduct(id, data) {
  try {
    return productsCollection.deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    console.log(error);
  }
}

const productRepository = {
  addProduct,
  getProducts,
  updateProducts,
  deleteProduct,
};

export default productRepository;
