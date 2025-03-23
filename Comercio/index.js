const express = require('express');
const cors = require('cors');
const app = express();
const usuariosRoutes = require('./routes/usuariosRoutes.js')
const comerciantesRoutes = require('./routes/comerciantesRoutes.js')
const tiendasRoutes = require('./routes/tiendasRoutes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hola Mundo');
})


app.use("/usuarios", usuariosRoutes);
app.use("/comerciantes", comerciantesRoutes);
app.use("/tiendas", tiendasRoutes);

app.listen(6500,() => {
    console.log('Servidor activo');
});