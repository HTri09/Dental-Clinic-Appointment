const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Patient = sequelize.define('patient', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    full_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    gender: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
});

module.exports = Patient;
