module.exports = app => {
    const tiketItsm = require("../controllers/tiketItsm.controller");
    const router = require("express").Router();

    router.post("/post", tiketItsm.create);
    router.get("/getAll", tiketItsm.findAll);
    app.use("/api", router)
}