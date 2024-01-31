const Usuario = require("../model/usuario");
const mongoose = require("mongoose");

const createUsuario = (req,res) => {
    const usuario = req.body;
    if(Object.keys(usuario).length === 0){
        return res.status(400).send({message: "O corpo da menssagem estar vazio"});
    }
    
    if(!usuario.nome){
        return res.status(400).send({message: "O campo 'nome' não foi encontrado!"});
    }

    if(!usuario.Email){
        return res.status(400).send({message: "O campo 'Email' não foi encontrado!"});
    }

    if(!usuario.sexo){
        return res.status(400).send({message: "O campo 'sexo' não foi encontrado!"});
    }

    if(!usuario.senha){
        return res.status(400).send({message: "O campo 'senha' não foi encontrado!"});
    }

    return res.status(201).send(Usuario.create(usuario));
}


module.exports = {
    createUsuario
}