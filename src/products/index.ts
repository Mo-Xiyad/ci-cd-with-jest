import express from "express";
import { GetProductsResponse } from "../types/IProduct";
import { ProductModel } from "./model";

const productsRouter = express.Router();

productsRouter
  .get("/", async (req, res) => {
    const products = await ProductModel.find({});

    // if not checked properly in jest test this will throw an error
    const response: GetProductsResponse = { products }; // use interface here to insure type safety of request/response
    res.send(response);
  })
  .post("/", async (req, res) => {
    const product = new ProductModel(req.body);
    await product.save();
    res.status(201).send(product);
  })
  .get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const products = await ProductModel.findById(id);
      if (products) {
        res.send(products);
      } else {
        res.status(404).send();
      }
    } catch (error) {
      res.status(404).send();
      console.error(error);
    }
  })
  .put("/:id", async (req, res) => {
    try {
      const product = await ProductModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!product) {
        res.status(404).send();
      } else {
        res.send(product);
      }
    } catch (error) {
      res.status(404).send();
      console.log(error);
    }
  })
  .delete("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const products = await ProductModel.findByIdAndDelete(id);
      if (products) {
        res.status(204).send();
      } else {
        res.status(404).send();
      }
    } catch (error) {
      res.status(404).send();
      console.error(error);
    }
  });

export default productsRouter;
