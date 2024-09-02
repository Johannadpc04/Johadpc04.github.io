const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Conexion a MongoDB
mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error(err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Esquema de usuario
const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    grado: String
});

const User = mongoose.model('User', userSchema);

// Rutas
app.get('/usuarios', async (req, res) => {
    const usuarios = await User.find();
    res.json(usuarios);
});

app.post('/usuarios', async (req, res) => {
    const { nombre, apellido, edad, grado } = req.body;
    const usuario = new User({ nombre, apellido, edad, grado });
    await usuario.save();
    res.json(usuario);
});

app.put('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, edad, grado } = req.body;
    const usuario = await User.findByIdAndUpdate(id, { nombre, apellido, edad, grado }, { new: true });
    res.json(usuario);
});

app.delete('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: 'Usuario eliminado' });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});