const express = require("express");
require("dotenv").config({});
const app = express();
const port = process.env.PORT || 3000;

const mainRoutes = require("./src/routes/")
app.use(express.urlencoded({ extended: false }));
app.use("/", mainRoutes);





app.listen(port, () => {
    console.log("localhost:" + port);
})