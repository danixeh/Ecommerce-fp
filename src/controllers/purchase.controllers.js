const Car = require("../models/car.models");

const Productincart = require("../models/productInCart.models");
const Productinorder = require("../models/productInOrder.models");

const addProductsToOrder = async (req, res, next) => {
  try {
    const { orderId, productId, price } = req.body;
    const { id } = req.params;
    // Productinorder.create({ orderId, productId, price });
    const product = await Productinorder.findOne({
      where: { id },
    });
    if (!product) {
      const create = await Productinorder.create({
        orderId,
        productId,
        price,
      });
    }
    const increment = await Productinorder.increment(
      { quantity: 1 },
      { where: { id } }
    );

    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const addProductsToCart = async (req, res, next) => {
  try {
    const { carId, productId, price, status } = req.body;
    const { id } = req.params;
    // Productinorder.create({ orderId, productId, price });
    const product = await Productincart.findOne({
      where: { id },
    });
    if (!product) {
      const create = await Productincart.create({
        carId,
        productId,
        price,
        status,
      });
    }
    const increment = await Productincart.increment(
      { quantity: 1 },
      { where: { id } }
    );

    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const createCart = async (req, res, next) => {
  try {
    const { userId, totalPrice } = req.body;
    await Car.create({ userId, totalPrice });
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};
module.exports = {
  addProductsToOrder,
  addProductsToCart,
  createCart,
};
