import express from "express";
import Purchase from "../models/Purchase.js";

export const purchaseItem = async (req, res, next) => {
  try {
    const newPurchase = new Purchase({
      ...req.body,
    });
    await newPurchase.save();
    res.status(201).send("Purchase successful");
  } catch (error) {
    next(error);
  }
};
