const User = require("../models/user");

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => {
      console.error(err);
      return res.status(500).send({ message: "Internal Server Error" });
    });
};

const createUser = (req, res) => {
  const { name, avatar } = req.body;

  User.create({ name, avatar })
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      console.error(err);
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: "Bad Request" });
      } else {
        return res.status(500).send({ message: "Internal Server Error" });
      }
    });
};

const getUser = (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .orFail(() => new Error("User not found"))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      console.error(err);
      if (err.name === "DocumentNotFoundError") {
        return res.status(400).send({ message: "Bad Request" });
      } else if (err.name === "CastError") {
        return res.status(404).send({ message: "User Not Found" });
      }
      return res.status(500).send({ message: "Internal Server Error" });
    });
};

module.exports = { getUsers, createUser, getUser };
