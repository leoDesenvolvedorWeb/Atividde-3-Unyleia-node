const Usuario = require("../model/usuario");
const mongoose = require("mongoose");

const empresas = [
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
    res.send(empresas[id]);
}

const findAllUsuario = (req,res) => {
    res.send(empresas);
}


const createUsuario = (req,res) => {
    const usuario = req.body;
    usuario.push(usuario);
    res.send(usuario);
}


module.exports = {
    find,
    findAllUsuario,
    createUsuario,
}