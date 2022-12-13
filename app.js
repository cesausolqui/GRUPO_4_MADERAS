const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override'); // paquete para usar PUT y Delete
const PORT = process.env.PORT || 3000;

const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);

const usersRoutes = require('./routes/usersRoutes');
app.use('/', usersRoutes);

// const productsRoutes = require('./routes/productsRoutes');
// app.use('/', productsRoutes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.listen(PORT, () => {
    console.log('Aplicación corriendo en el puerto http://localhost:3000');

});