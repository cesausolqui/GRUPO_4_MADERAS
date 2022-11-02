const express = require('express');
const path = require('path'); // UNE DIRECTORIOS
const app = express();
const PORT = process.env.PORT || 3000; //variable dinamica de puerto
const HOST = process.env.HOST || 'localhost';


app.set('views', path.resolve(__dirname, './views')); 

app.use(express.static(path.resolve(__dirname, './public')));

app.listen(PORT, ()=>{
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
