import { productsCollectioon } from "../database/mongo.js";
import 
function addProduct(name, discount, price, image, quantity) {
  productsCollectioon.insertOne({
    _id: "testeIds2",
    name,
    discount: parseFloat(discount),
    price: parseFloat(price),
    image,
    quantity,
  });
}

const productRepository = {
  addProduct,
};

export default productRepository;
