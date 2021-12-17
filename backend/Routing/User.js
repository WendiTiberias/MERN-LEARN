//!USER ROUTING

const express = require("express");
const controller = require("../Controller/User");
const Routing = express.Router();

const { getUser, createUser, deleteUser, editUser } = controller;

Routing.route("/user")
  .get(getUser)
  .post(createUser)
  .delete(deleteUser)
  .put(editUser);

module.exports = Routing;
