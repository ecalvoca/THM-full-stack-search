import express from "express";
import { getAllItems, getItemById } from "../handlers/route.handler";

export const countriesRouter = express.Router();

countriesRouter.get("/", getAllItems("countries", { name: "$country" }));
countriesRouter.get("/:id", getItemById("countries", { name: "$country" }));