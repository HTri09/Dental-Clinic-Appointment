const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Doctor = sequelize.define('doctor', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    specialization_id: DataTypes.INTEGER,
});

module.exports = Doctor;
