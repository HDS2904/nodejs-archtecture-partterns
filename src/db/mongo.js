const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:4001/', {})
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error al conectar a MongoDB', error));