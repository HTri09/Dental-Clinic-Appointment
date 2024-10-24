const express = require('express');
const Appointment = require('../models/Appointment');
const router = express.Router();

// Create a new appointment
router.post('/create', async (req, res) => {
    const { notes, status, appointment_date, user_id, patient_id } = req.body;
    try {
        const appointment = await Appointment.create({
            notes, status, appointment_date, user_id, patient_id,
        });
        res.status(201).json(appointment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all appointments
router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.findAll();
        res.status(200).json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
