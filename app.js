'use strict'

// Imports
const express = require('express')
const sass_middleware = require('node-sass-middleware')
const path = require('path')

// Constants
const PORT = 8080
const HOST = '0.0.0.0'

// Helper functions
const join = (prefix, suffix) => path.join(prefix, suffix)
const root_join = suffix => join(__dirname, suffix)

// Route paths
const routes_path = root_join('routes')
const index_routes = require(join(routes_path, 'index'))
const contact_routes = require(join(routes_path, 'contact'))

// Setup app
const app = express()

app.use(
    sass_middleware({
        src: __dirname,
        dest: __dirname,
        debug: true
    })
)

app.use('/public', express.static(root_join('public')))

app.set('views', root_join('views'))
app.set('view engine', 'pug')


// Use routes
app.use('/', index_routes)
app.use('/contact', contact_routes)

app.use((req, res, next) => {
    const err = new Error('Not found')
    err.status = 404
    next(err)
})

app.use((err, req, res, next) => {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.render('error')
})


app.listen(PORT, HOST)
module.exports = app

console.log(`Running on http://${HOST}:${PORT}`)
