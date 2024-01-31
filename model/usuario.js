const mongoose = require("mongoose");

const usuarioShema = mongoose.Schema({
    nome: {type: String, unique: true, required: true},
    Email: {type: String, unique: true, required: true},
    senha: {type: String, require: true}
});

const Usuario = mongoose.model("usuario",usuarioShema);

module.exports = Usuario;