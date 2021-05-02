const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  nombre: String,
  descripcion: String,
  precio: String,
  cantidad: String,
  marca: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('tasks', TaskSchema);
