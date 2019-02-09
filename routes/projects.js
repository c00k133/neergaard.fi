'use strict'

const express = require('express')
const router = express.Router()

// For the time being, let's simulate some models with a JSON file
const projects = require('../projects.json')

router.get('/', (req, res, next) => {
    res.render('projects.pug', {
        github_link: 'https://github.com/c00k133/',
        projects: projects
    })
})

module.exports = router
