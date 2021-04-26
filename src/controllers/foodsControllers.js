const { foods } = require("../models/");
const foodsRoutes = require("../routes/foodsRoutes");

module.exports = {
    getAllFoods: (req, res) => {
        foods.findAll()
            .then((data) => {
                res.send({
                    msg: "Success",
                    status: 200,
                    data
                })
            })
            .catch((data) => {
                res.send({
                    msg: "Error",
                    status: 500,
                    data
                })
            })
    },
    postFoods: (req, res) => {
        let { body } = req;
        foods.create(body)
            .then((data) => {
                res.status(200).send({
                    msg: "Post data success",
                    status: 200,
                    data
                })
            })
            .catch((err) => {
                res.status(500).send({
                    msg: "Post data failed",
                    status: 500,
                    err
                })
            })

    },
    getDataById: (req, res) => {
        let { id } = req.params;
        foods.findOne({
                where: { id }
            })
            .then((data) => {
                res.status(200).send({
                    msg: "Success Get Data By Id",
                    status: 200,
                    data
                })
            })
            .catch((err) => {
                res.status(500).send({
                    msg: "Failed Get Data By Id",
                    status: 500,
                    err
                })
            })
    }
}