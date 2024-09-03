const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/gestionusuario')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error(err));


const userSchema = new mongoose.Schema({
    usuario: String,
    clave: String,
    nombre: String,
    apellido: String,
    fechaNacimiento: Date
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.post('/users', async (req, res) => {
    console.log('Datos recibidos:', req.body);
    try {
        const user = new User(req.body);
        await user.save();
        console.log('Usuario guardado:', user); // Agrega esta línea para ver el usuario guardado
        res.json(user);
    } catch (error) {
        console.error('Error al guardar el usuario:', error);
        res.status(500).send('Error al guardar el usuario');
    }
});


app.put('/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
});

app.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

