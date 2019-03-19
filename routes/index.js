'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('index.pug', {
        intro_image: '/public/img/cookie.png'
    })
})

module.exports = router
