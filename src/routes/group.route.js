const express = require('express');
const route = express.Router();

const groupController = require('../controller/groupController');

route.post('/', groupController.createGroup);
route.get('/', groupController.getAllGroup);
route.get('/:id', groupController.getByIdGroup);
route.put('/:id', groupController.updateGroup);
route.delete('/:id', groupController.deleteGroup);

module.exports = route;