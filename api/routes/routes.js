"use strict";

module.exports = function (app) {
  const userController = require("../controllers/userController");
  app.route("/users").get(userController.getAllUsers);
  app.route("/auth").post(userController.auth);
  app.route("/signup").post(userController.signup);
};
