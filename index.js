'use strict';

const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(
    sassMiddleware({
        src: __dirname,  // TODO: check if `sass` directory needs to be added
        dest: path.join(__dirname, 'public'),
        debug: true
    })
);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index.pug', {title: 'Axel Neergaard', message: 'Welcome'})
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
