'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LichHens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ma_lich_hen: {
        type: Sequelize.INTEGER
      },
      ghi_chu: {
        type: Sequelize.STRING
      },
      trang_thai: {
        type: Sequelize.BOOLEAN
      },
      ngay_hen: {
        type: Sequelize.DATE
      },
      ma_nguoi_dung: {
        type: Sequelize.INTEGER
      },
      ma_benh_nhan: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('LichHens');
  }
};