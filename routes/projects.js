'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('projects.pug')
})

module.exports = router
