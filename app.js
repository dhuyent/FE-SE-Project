require('dotenv').config();

const express = require('express');
const express_layout = require('express-ejs-layouts');

const app = express();
const PORT = 3000 || process.env.PORT

app.use(express.static('public'));

// Templating engine
app.use(express_layout);
app.set('layout', './layouts/main.ejs');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main.js'));

app.listen(PORT, function() {
    console.log(`App listening on port ${PORT}`)
});