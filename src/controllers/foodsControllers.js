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
    },
    deleteFoods: async(req, res) => {
        let { id } = req.params;
        let findFoods = await foods.findOne({
            where: { id }
        })
        foods.destroy({
                where: { id }
            })
            .then((data) => {
                if (data == 1) {
                    res.status(200).send({
                        msg: "Delete Success",
                        status: 200,
                        data: findFoods
                    });
                } else {
                    res.status(404).send({
                        msg: "Cant Delete",
                        status: 404,
                        data: "Data non found"
                    });
                }
            })
            .catch((err) => {
                res.status(500).send({
                    msg: "Failed Delete Data",
                    status: 500,
                    err
                })
            })

    },
    updateFoods: async(req, res) => {
        let { id } = req.params;
        let { body } = req;
        let findFoods = await foods.findOne({
            where: { id }
        })
        foods.update(req.body, {
                where: { id }
            })
            .then(data => {
                if (data == 1) {
                    let resObjeck = {...findFoods.datavalues, ...body };
                    res.status(200).send({
                        msg: "Update Success",
                        status: 200,
                        data: resObjeck
                    });
                } else {
                    res.status(404).send({
                        msg: "Cant Update",
                        status: 404,
                        data: "Data non found"
                    });
                }
            })
            .catch((err) => {
                res.status(500).send({
                    msg: "Failed Update Data",
                    status: 500,
                    err
                })
            })
    }
}