"use strict";

const db = require("../models");
const userModel = db.User;
const bcryptjs = require("bcryptjs");
const { displayStatus, stringify, createJWT } = require("../utils/utils");
const { createUser } = require("../repository/userRepository");

//fetch data
exports.getAllUsers = async (req, res) => {
  await userModel
    .findAll({
      raw: true,
    })
    .then((data) => {
      displayStatus(res, 200, "OK", data);
    })
    .catch((err) => {
      displayStatus(res, 500, "Error", err);
    });
};

exports.auth = async (req, res) => {
  const { email, passsword } = req.body;
  //validate request
  if (email === null || passsword === null) {
    displayStatus(500, "Error", "Email or password cannot be null !");
  }

  await userModel
    .findOne({
      raw: true,
      where: {
        email: req.body.email,
      },
    })
    .then((data) => {
      if (!data) {
        displayStatus(res, 404, "Not Found", data);
      }
      bcryptjs.compare(req.body.password, data.password, (err, result) => {
        if (result == true) {
          const token = createJWT({ email, passsword });
          delete data.password;
          displayStatus(res, 200, "OK", { token: token, user: data });
        } else {
          displayStatus(
            res,
            400,
            "Failed",
            `Incorrect password ${stringify(data)}`
          );
        }
      });
    })
    .catch((err) => {
      displayStatus(res, 500, "Error", err);
    });
};

exports.signup = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(firstName, lastName, email, password);

  createUser({ firstName, lastName, email, password })
    .then((response) => {
      console.log(response);
      displayStatus(res, 201, "User registered", response);
    })
    .catch((err) => displayStatus(res, 500, "Error", "error occured"));
};
