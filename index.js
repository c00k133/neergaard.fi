'use strict';

const express = require('express');
const sass_middleware = require('node-sass-middleware');
const path = require('path');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(
    sass_middleware({
        src: __dirname,
        dest: __dirname,
        debug: true
    })
);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index.pug', {title: 'Axel Neergaard'})
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
