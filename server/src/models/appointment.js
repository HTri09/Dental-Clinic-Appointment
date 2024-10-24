const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Appointment = sequelize.define('appointment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    notes: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    appointment_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Appointment;
