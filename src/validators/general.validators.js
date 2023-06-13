// it will help us to validate
const { check } = require("express-validator");
const validateResult = require("../utils/validate.js");

const createProductValidator = [
  check("name", "error name")
    .exists()
    .withMessage("is not sending name")
    .notEmpty()
    .withMessage("name should do not be empty"),
  check("description", "error userId")
    .exists()
    .withMessage("is not sending description")
    .notEmpty()
    .withMessage("description should not be empty"),
  check("price", "error price")
    .exists()
    .withMessage("is not sending price")
    .notEmpty()
    .withMessage("price should not be empty")
    .isDecimal()
    .withMessage("price have to be a decimal"),
  check("availableqty", "error availableqty")
    .exists()
    .withMessage("is not sending availableqty")
    .notEmpty()
    .withMessage("availableqty should not be empty")
    .isBoolean()
    .withMessage("availableqty have to be a boolean"),
  check("userId", "error userId")
    .exists()
    .withMessage("is not sending userId")
    .notEmpty()
    .withMessage("userId should not be empty")
    .isInt()
    .withMessage("userId have to be a String"),
  validateResult,
];

const createRolValidator = [
  check("rol", "error rol")
    .exists()
    .withMessage("is not sending rol")
    .notEmpty()
    .withMessage("rol should not be empty")
    .isString()
    .withMessage("rol have to be a integer"),
  check("description", "error description")
    .exists()
    .withMessage("is not sending description")
    .notEmpty()
    .withMessage("description should not be empty")
    .isString()
    .withMessage("description have to be a String"),
  validateResult,
];

const createUserValidator = [
  check("username", "error username")
    .exists()
    .withMessage("is not sending username")
    .notEmpty()
    .withMessage("username should not be empty"),
  check("email", "error email")
    .exists()
    .withMessage("is not sending email")
    .notEmpty()
    .withMessage("email should not be empty")
    .isEmail()
    .withMessage("email have to be a email type"),
  check("password", "error password")
    .exists()
    .withMessage("is not sending password")
    .notEmpty()
    .withMessage("password should not be empty")
    .isString()
    .withMessage("password have to be a String"),
  validateResult,
];

module.exports = {
  createProductValidator,
  createRolValidator,
  createUserValidator,
};
