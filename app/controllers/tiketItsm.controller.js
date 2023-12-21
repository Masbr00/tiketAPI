const db = require("../models");
const TiketItsm = db.tiketItsm;

exports.create = async (req, res) => {
    try {
        const data = await TiketItsm.create(req.body)
        res.status(201).send({
            status: true,
            message: "data created",
            data
        })
    } catch (error) {
        res.status(500).send({
            message: "server error"
        })
    }
}

exports.findAll = async (req, res) => {
    TiketItsm.find({ isDeleted: false }).then(data => {
        res.status(200).send({
            status: true,
            message: "data found",
            data
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err || "server error"
        })
    })
}