const Categories = require("../models/categories.models");
const Productinorder = require("../models/productInOrder.models");

const findAllCategories = async (req, res, next) => {
  try {
    const categories = await Categories.findAll();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

const addProductsToOrder = async (req, res, next) => {
  try {
    const { orderId, productId, price } = req.body;
    await Productinorder.create({ orderId, productId, price });
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

module.exports = { findAllCategories, addProductsToOrder };
