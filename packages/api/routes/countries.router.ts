import express from "express";
import { findItemByTerm, getItemById } from "../handlers/route.handler";

export const countriesRouter = express.Router();

countriesRouter.get("/", findItemByTerm("countries", { name: "$country" }));
countriesRouter.get("/:id", getItemById("countries", { name: "$country" }));