const express = require('express')
const router = express.Router()
const path = require('path')
const { title } = require('process')
const controller = require('../controllers/index')

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Dental Clinic'
    })
})

router.get('/test', controller.getAllBacSi)

router.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' })
})

module.exports = router