'use strict'

// Imports
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')

// Helper functions
const curried_join = prefix => suffix => path.join(prefix, suffix)
const root_join = curried_join(__dirname)

// Setup app
const app = express()

const public_folder = root_join('public')
app.use('/public', express.static(public_folder))
app.use(favicon(path.join(public_folder, 'favicon.ico')))

app.set('views', root_join('views'))
app.set('view engine', 'pug')


// Route paths
const routes_path = root_join('routes')
const routes_join = curried_join(routes_path)

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
    const err_status = err.status || 500

    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development'
        ? err
        : {status: err_status}

    res.status(err_status)
    res.render('error')
})


module.exports = app
