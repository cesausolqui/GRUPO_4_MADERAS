const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

const mainRoutes = require('./routes/mainRoutes');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', mainRoutes);

const usersRoutes = require('./routes/usersRoutes');
app.use('/users', usersRoutes);


app.use(express.static(path.resolve(__dirname, 'public'))
);

//Routes o rutas

// app.get('/', (request, response) => {
    // response.sendFile(path.resolve(__dirname, './views/index.html'));
// });

app.get('/register.html', (request, response) => {
    response.sendFile(path.resolve(__dirname, './views/register.html'));
});

//app.get('/login.ejs', (request, response) => {
//    response.sendFile(path.resolve(__dirname, './views/login.html'));
//});

app.get('/productDetail.html', (request, response) => {
    response.sendFile(path.resolve(__dirname, './views/productDetail.html'));
});

app.get('/productCart.html', (request, response) => {
    response.sendFile(path.resolve(__dirname, './views/productCard.html'));
});

app.listen(PORT, () => {
    console.log('Aplicación corriendo en el puerto http://localhost:3000');
});