const express = require('express');
const route = express.Router();

const { getAllStudent, createStudent, getByIdStudent, updateStudent, deleteStudent } = require('../controller/studentController');
const { getAllUniversity, createUniversity, getByIdUniversity, updateUniversity, deleteUniversity } = require('../controller/universityController');

route.post('/', createStudent);
route.get('/', getAllStudent);
route.get('/:id', getByIdStudent);
route.put('/:id', updateStudent);
route.delete('/:id', deleteStudent);

// route.post('/', createUniverisity);
// route.get('/', getAllUniverisity);
// route.get('/:id', getByIdUniverisity);
// route.put('/:id', updateUniverisity);
// route.delete('/:id', deleteUniverisity);


module.exports = route;