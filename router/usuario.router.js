const router = require("express").Router();
const usuario = require("../controller/usuario.controller")

router.post("/create", usuario.createUsuario);

module.exports = router;