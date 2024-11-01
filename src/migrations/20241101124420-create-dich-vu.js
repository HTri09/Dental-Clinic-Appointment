'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DichVus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ma_dich_vu: {
        type: Sequelize.INTEGER
      },
      ma_loai: {
        type: Sequelize.INTEGER
      },
      ten: {
        type: Sequelize.STRING
      },
      don_vi: {
        type: Sequelize.STRING
      },
      gia: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DichVus');
  }
};