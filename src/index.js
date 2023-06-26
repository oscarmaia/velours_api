import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import healthRouter from "./routes/health.routes.js";
import productRouter from "./routes/product.routes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(productRouter);
app.use(healthRouter);

const PORT = process.env.PORT | 5000;
app.listen(PORT, () => console.log(`Running at port ${PORT}`));
