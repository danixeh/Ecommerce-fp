const Users = require("../models/users.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Order = require("../models/order.models");
const Product = require("../models/product.models");
const Productincart = require("../models/productInCart.models");
const Car = require("../models/car.models");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    const order = await Order.findAll();
    res.json(order);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Users.findByPk(id);
    res.json(post);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getUserOrdersById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Users.findByPk(id, {
      attributes: ["id", "username", "email", "avatar"],
      include: [
        {
          model: Order,
          attributes: ["id", "totalPrice", "status"],
        },
        //   {
        //     model: Categories,
        //     attributes: ["id", "name_category"],
        //   },
      ],
    });
    res.json(post);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getUserProductsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Users.findByPk(id, {
      attributes: ["id", "username", "email", "avatar"],
      include: [
        {
          model: Car,
          include: {
            model: Productincart,
          },
          // attributes: ["id", "totalPrice", "status"],
        },
        //   {
        //     model: Productincart,
        //   },
      ],
    });
    res.json(post);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createOrder = async (req, res) => {
  try {
    // extract request body
    const newTodo = req.body;
    // insert into users = Todos.create
    await Order.create(newTodo);
    // at the end we answer 201 state
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, avatar } = req.body;
    await Users.update({ username, avatar }, { where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateUserVerify = async (req, res) => {
  try {
    const { id } = req.params;
    const { validuser } = req.body;
    await Users.update({ validuser }, { where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await Users.destroy({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

// export controllers

module.exports = {
  createOrder,
  deleteUser,
  getAllOrders,
  getAllUsers,
  updateUser,
  getUserById,
  updateUserVerify,
  getUserOrdersById,
  getUserProductsById,
};
