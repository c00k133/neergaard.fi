'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('contact.pug', {
        email: 'axel.neergaard@gmail.com'
    })
})

module.exports = router
