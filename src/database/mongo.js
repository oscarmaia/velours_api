import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

//connect to database
const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;
try {
    await mongoClient.connect();
    console.log("Connected to database successfully");
    db = mongoClient.db("velours");
} catch (error) {
    console.log(error);
}

export const productsCollectioon = db.collection("products");
