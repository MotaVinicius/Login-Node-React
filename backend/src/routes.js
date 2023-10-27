const express = require('express');
const routes = express.Router();

const users = [{
    id: 1,
    nome: 'Vinicius',
    email: 'motavinicius@outlook.com',
    senha: 'abc123'
}]

routes.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const user = users.find(user => user.email === email && user.senha === senha);
    if(user){
       return res.status(200).json(`Bem vindo ${user.nome}`);
    }
   return res.status(401).json({message: 'Login Invalido'});
});

module.exports = routes;