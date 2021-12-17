const express = require("express");
const Router = require("./Routing/User");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,POST,DELETE,PUT",
    optionsSuccessStatus: 200,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/v1", Router);

app.listen(4000, function () {
  console.log("server is running now");
});
