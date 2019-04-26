'use strict'

const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res, next) => {
    res.render('index.pug', {
        intro_image: '/public/img/cookie.png'
    })
})

// Serve robots.txt
router.get('/robots.txt', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../robots.txt'))
})

module.exports = router
