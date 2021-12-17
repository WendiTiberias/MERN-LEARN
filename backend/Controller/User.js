const Model = require("../connect/conn");

async function findModel() {
  return await Model.find().sort({ name: 1 });
}

module.exports = {
  getUser: async (req, res, next) => {
    try {
      res.status(200).json({
        request: "success",
        method: "get",
        headers: "json",
        that: {
          item: await findModel(),
        },
      });
    } catch (error) {
      res.status(400).json({
        request: "failed",
        method: "get",
        error: error,
      });
    }

    next();
  },

  createUser: async (req, res, next) => {
    try {
      const saves = await new Model(req.body);
      saves.save();
      res.status(200).json({
        request: "success",
        method: "post",
        that: {
          item: await findModel(),
        },
      });
    } catch (error) {
      res.status(400).json({
        request: "failed",
        error: error,
      });
    }

    next();
  },

  deleteUser: async (req, res, next) => {
    try {
      await Model.deleteOne({ _id: req.body.id });
      res.status(200).json({
        request: "success",
        method: "delete",
        that: {
          item: await findModel(),
        },
      });
    } catch (error) {
      res.status(404).json({
        request: "failed",
        error: error,
      });
    }

    next();
  },

  editUser: async (req, res, next) => {
    try {
      console.log(req.body);
      await Model.updateOne({ id: req.body.id }, { $set: req.body });
      res.status(200).json({
        request: "success",
        method: "put",
        that: {
          item: await findModel(),
        },
      });
    } catch (error) {
      res.status(404).json({
        request: "failed",
        method: "put",
        that: {
          item: "request failed",
        },
      });
    }

    next();
  },
};
