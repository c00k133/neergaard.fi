'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('contact.pug')
})

module.exports = router
