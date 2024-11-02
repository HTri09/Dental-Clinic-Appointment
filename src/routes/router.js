const express = require('express')
const router = express.Router()

const { chatbotController, appoinmentController, retrieveDataController } = require('../controllers/index')
const { sequelize, DichVu, LoaiDichVu } = require('../models/index')

// View
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Dental Clinic'
    })
})

// Retrieve Data
router.get('/api/getAll/:model', retrieveDataController.getAll)
router.get('/api/getAllBacSiInfo', retrieveDataController.getAllBacSiInfo)


// Chatbot
router.post('/api/chat', chatbotController.chat)

// Appointment

router.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' })
})

router.get('/api/test', async (req, res) => {
    const response = await sequelize.query(`EXEC LayThongTinBacSi 1`)
    res.status(200).json(response)
})


module.exports = router