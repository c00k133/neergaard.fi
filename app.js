'use strict'

// Imports
const express = require('express')
const sass_middleware = require('node-sass-middleware')
const path = require('path')

// Constants
const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '0.0.0.0'

// Helper functions
const join = (prefix, suffix) => path.join(prefix, suffix)
const root_join = suffix => join(__dirname, suffix)

// Setup app
const app = express()

app.use(
    sass_middleware({
        src: __dirname,
        dest: __dirname,
        debug: process.env.NODE_ENV === 'development'
    })
)

app.use('/public', express.static(root_join('public')))

app.set('views', root_join('views'))
app.set('view engine', 'pug')


// Route paths
const routes_path = root_join('routes')
const routes_join = suffix => join(routes_path, suffix)

const index_routes = require(routes_join('index'))
const contact_routes = require(routes_join('contact'))
const projects_routes = require(routes_join('projects'))

// Use routes
app.use('/', index_routes)
app.use('/contact', contact_routes)
app.use('/projects', projects_routes)


// 404 handling
app.use((req, res, next) => {
    const err = new Error('Not found')
    err.status = 404
    next(err)
})

// Error handling
app.use((err, req, res, next) => {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.render('error')
})


app.listen(PORT, HOST)
module.exports = app

console.log(`Running on http://${HOST}:${PORT}`)
