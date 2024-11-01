'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BenhNhans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ma_benh_nhan: {
        type: Sequelize.INTEGER
      },
      ho_ten: {
        type: Sequelize.STRING
      },
      gioi_tinh: {
        type: Sequelize.BOOLEAN
      },
      tuoi: {
        type: Sequelize.INTEGER
      },
      so_dien_thoai: {
        type: Sequelize.STRING
      },
      dia_chi: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('BenhNhans');
  }
};