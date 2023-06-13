const Roles = require("../models/roles.models");
const Car = require("../models/car.models");
const Order = require("../models/order.models");
const Users = require("../models/users.models");
const Product = require("../models/product.models");
const ProductInCart = require("../models/productInCart.models");
const ProductInOrder = require("../models/productInOrder.models");
// ------------------------

const initModels = () => {
  Users.hasOne(Car, { foreignKey: "userId" });
  Car.belongsTo(Users, { foreignKey: "userId" });

  Users.hasMany(Order, { foreignKey: "userId" });
  Order.belongsTo(Users, { foreignKey: "userId" });

  Users.hasMany(Product, { foreignKey: "userId" });
  Product.belongsTo(Users, { foreignKey: "userId" });

  Car.hasMany(ProductInCart, { foreignKey: "carId" });
  ProductInCart.belongsTo(Car, { foreignKey: "carId" });

  Product.hasMany(ProductInCart, { foreignKey: "productId" });
  ProductInCart.belongsTo(Product, { foreignKey: "productId" });

  Product.hasMany(ProductInOrder, { foreignKey: "productId" });
  ProductInOrder.belongsTo(Product, { foreignKey: "productId" });

  Order.hasMany(ProductInOrder, { foreignKey: "orderId" });
  ProductInOrder.belongsTo(Order, { foreignKey: "orderId" });

  Roles.hasMany(Users, { foreignKey: "rolId" });
  Users.belongsTo(Roles, { foreignKey: "rolId" });
  // -------------------------------------------
};

module.exports = initModels;
