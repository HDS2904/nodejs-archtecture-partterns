const express = require('express');
const route = express.Router();

const userController = require('../controller/userController');

route.post('/', userController.createUser);
route.get('/', userController.getAllUser);
route.get('/:id', userController.getByIdUser);
route.put('/:id', userController.updateUser);
route.delete('/:id', userController.deleteUser);

module.exports = route;