const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/arcade', (error) => {
    if (error) {
        console.log('ERROR');
        console.log(error);
        process.exit(1);
    }
    console.log('Database Connected');
})

const PORT = 8080;
const app = express();

app.use(bodyParser.json());
app.use(cors())

// Models
require('./models/win.model');

// Middleware

// Routes
require('./routes/wins.routes')(app);

app.listen(PORT, () => console.log(`Arcade server running on port ${PORT}`));