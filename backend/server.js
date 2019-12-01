const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const booksRouter = require('./routes/routes');
const helmet = require('helmet');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet.noCache());
app.use(helmet.hidePoweredBy({setTo: "PHP 4.2.0"}));

//const uri = process.env.MONGO_URI;
mongoose.connect("mongodb+srv://iancarlo:mongodb@cluster0-cerfm.mongodb.net/issuestracker?retryWrites=true&w=majority", {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Tu base de datos MongoDB ha sido actualizada y conectada exitosamente');
});

app.use('/books',booksRouter )

const port = process.env.PORT | 3000;
app.listen(port, () => {console.log(`Server listening on port: ${port}`)});

