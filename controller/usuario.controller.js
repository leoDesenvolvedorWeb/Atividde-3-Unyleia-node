const Usuario = require("../model/usuario");
const mongoose = require("mongoose");

const usuarios = [
    {
        nome: "leo",
        email: "leoleo",
        senha: "qwer45",
    },

    {
        nome: "matheus",
        email: "leo@leo",
        senha: "qwer45",
    },

    {
        nome: "joao",
        email: "leo@leo",
        senha: "qwer45",
    },
]

const find = (req,res) => {
    const id = new req.params.id;
    res.send(usuarios[id]);
}

const findAllUsuario = (req,res) => {
    res.send(usuarios);
}


const createUsuario = (req,res) => {
    const usuario = req.body;
    usuario.push(usuarios);
    res.send(usuarios);
}


module.exports = {
    find,
    findAllUsuario,
    createUsuario,
}