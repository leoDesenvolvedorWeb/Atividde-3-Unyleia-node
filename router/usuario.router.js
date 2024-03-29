const router = require("express").Router();
const usuario = require("../controller/usuario.controller")

router.get("/find/:id", usuario.find);
router.get("/findAll", usuario.createUsuario);
router.post("/create", usuario.createUsuario);

module.exports = router;