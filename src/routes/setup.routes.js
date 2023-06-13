//import express route
const { Router } = require("express");
// here we use the validators and authenticators
// const authenticate = require("../middlewares/auth.middleware");
const { hasRoles, isAdmin } = require("../middlewares/role.middleware");

const {
  createProductValidator,
  createRolValidator,
  createUserValidator,
} = require("../validators/general.validators");

const {
  login,
  validateEmail,
  createRol,
  getAllRoles,
  updateProduct,
  getAllProducts,
  getAllCars,
  createUser,
  createProduct,
} = require("../controllers/setup.controllers");

// create a router instance

const router = Router();

router.get("/cars", getAllCars);
router.get("/products", getAllProducts);
router.get("/rol", getAllRoles);
router.post("/email-validate", validateEmail);
router.post("/login", login);
router.post("/product", createProductValidator, createProduct);
router.post("/rol", createRolValidator, createRol);
router.post("/users", createUserValidator, createUser);
router.put("/product/:id", updateProduct);

module.exports = router;

// create category
// router.post("/posts", authenticate, createPost);

// // create category
// router.get("/posts/category/:categoryId", getPostByCategories);

// router.get("/posts/:id/answers", getPostWithAnswer);
// // create todo

// router.post("/todos", createTodos);
