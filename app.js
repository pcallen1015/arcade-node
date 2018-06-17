const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/arcade', (error) => {
    if (error) {
        console.log('ERROR');
        console.log(error);
        process.exit(1);
    }
    console.log('Database Connected');
})

const app = express();

app.use(bodyParser.json());

// Models
require('./models/win.model');

// Middleware

// Routes
require('./routes/wins.routes')(app);

app.listen(8080, () => console.log('Arcade server running on port 3000'));