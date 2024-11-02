const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    dialectOptions: {
      encrypt: true,
      trustServerCertificate: true,
      options: {
        instanceName: process.env.DB_INSTANCE,
        enableArithAbort: true,
      },
    },
    pool: {
      max: 10,
      min: 0,
      idle: 30000,
    },
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'database_test',
    server: process.env.DB_SERVER,
    dialect: 'mssql',
    port: parseInt(process.env.DB_PORT, 10) || 1433,
    dialectOptions: {
      encrypt: true,
      trustServerCertificate: true,
      options: {
        instanceName: 'PLEASE',
        enableArithAbort: true,
      },
    },
    pool: {
      max: 10,
      min: 0,
      idle: 30000,
    },
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'database_production',
    server: process.env.DB_SERVER,
    dialect: 'mssql',
    port: parseInt(process.env.DB_PORT, 10) || 1433,
    dialectOptions: {
      encrypt: true,
      trustServerCertificate: true,
      options: {
        instanceName: 'PLEASE',
        enableArithAbort: true,
      },
    },
    pool: {
      max: 10,
      min: 0,
      idle: 30000,
    },
  },
}
