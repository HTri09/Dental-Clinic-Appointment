const express = require('express')
const router = express.Router()
const { chatbotController, appoinmentController } = require('../controllers/index')
const { sequelize, DichVu, LoaiDichVu } = require('../models/index')

// View
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Dental Clinic'
    })
})


// Chatbot
router.get('/api/getAll/:model', chatbotController.getAll)
router.get('/api/getAllBacSiInfo', chatbotController.getAllBacSiInfo)

// Appointment

router.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' })
})

router.get('/api/test', async (req, res) => {
    const response = await sequelize.query(`EXEC LayThongTinBacSi 1`)
    res.status(200).json(response)
})


module.exports = router