const express = require('express');
const { sequelize } = require('./models'); // Importa la conexión a la base de datos
const Province_route = require('./routes/provinces_routes'); // Importa las rutas de provincias
const Directions_route = require('./routes/directions_routes'); // Importa las rutas de direcciones
const Cantons_route = require('./routes/cantons_routes'); // Importa las rutas de Cantones
const Addresses_route = require('./routes/addresses_routes'); // Importa las rutas de Direcciones Completas
const Athletes_route = require('./routes/athletes_routes'); // Importa las rutas de los atletas
const Shirt_sizes_route = require('./routes/shirt_sizes_routes'); // Importa las rutas de las tallas de camisa
const Shoe_sizes_route = require('./routes/shoe_sizes_routes'); // Importa las rutas de las tallas de calzado
const Athlete_sizes_route = require('./routes/athlete_sizes_routes'); // Importa las rutas de las tallas de los atletas


const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware para parsear JSON

// Probar la conexión con la base de datos
sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa.'))
  .catch((error) => console.error('No se pudo conectar a la base de datos:', error));

// Usar las rutas de productos


app.use('/Provinces', Province_route);
app.use('/Directions', Directions_route);
app.use('/Cantons', Cantons_route);
app.use('/Addresses', Addresses_route);
app.use('/Athletes', Athletes_route);
app.use('/Shirtsizes', Shirt_sizes_route);
app.use('/Shoesizes', Shoe_sizes_route);
app.use('/Athletessizes', Athlete_sizes_route);


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});