const express = require('express');
const app = express();
const usuariosRoutes = require('./routes/usuariosRoutes.js')
const comerciantesRoutes = require('./routes/comerciantesRoutes.js')

app.get('/', (req, res) => {
    res.send('Hola Mundo');
})

app.use("/usuarios", usuariosRoutes);
app.use("/comerciantes", comerciantesRoutes);

app.listen(6500,() => {
    console.log('Servidor activo');
});