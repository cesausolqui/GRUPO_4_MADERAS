const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Aplicación corriendo en el puerto http://localhost:3000');
});

app.use(express.static(path.resolve(__dirname, 'public'))
);

//Routes o rutas

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/register.html', (request, response) => {
    response.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login.html', (request, response) => {
    response.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/productDetail.html', (request, response) => {
    response.sendFile(path.resolve(__dirname, './views/productDetail.html'));
});

app.get('/productCart.html', (request, response) => {
    response.sendFile(path.resolve(__dirname, './views/productCard.html'));
});