const express = require('express');
const route = express.Router();

const tagController = require('../controller/tagController');
route.post('/', tagController.createTag);
route.get('/', tagController.getAllTag);
route.get('/:id', tagController.getByIdTag);
route.put('/:id', tagController.updateTag);
route.delete('/:id', tagController.deleteTag);


module.exports = route;