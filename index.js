const express =require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// cors permite que te conectes a otro servidor

const cors =require('cors')
const MONGO_DB_CONNECTION_STRING='mongodb+srv://krisnarocabado:zoharrama@cluster0.e09pjtt.mongodb.net/?retryWrites=true&w=majority'
// Elimina el warning
mongoose.set('strictQuery', false);
//conectar mongoose
mongoose.connect(MONGO_DB_CONNECTION_STRING)
    .then(() => console.log('DB connected'))
    .catch((error) => console.error('DB connection error:', error));

// crear el servidor
const app = express();

// habilitar bodyparser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Habilitar cors
app.use(cors());

// Rutas de la app
app.use('/', routes());

// carpeta publica
app.use(express.static('uploads'));


// puerto

const puerto = 2000;
app.listen(puerto,console.log('servidor :', puerto));
