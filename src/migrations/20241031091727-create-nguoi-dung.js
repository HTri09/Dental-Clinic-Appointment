'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NguoiDungs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ma_nguoi_dung: {
        type: Sequelize.INTEGER
      },
      ho_ten: {
        type: Sequelize.STRING
      },
      cccd: {
        type: Sequelize.STRING
      },
      so_dien_thoai: {
        type: Sequelize.STRING
      },
      dia_chi: {
        type: Sequelize.STRING
      },
      gioi_tinh: {
        type: Sequelize.BOOLEAN
      },
      ngay_sinh: {
        type: Sequelize.DATE
      },
      vai_tro: {
        type: Sequelize.STRING
      },
      ten_dang_nhap: {
        type: Sequelize.STRING
      },
      mat_khau: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      he_so_luong: {
        type: Sequelize.FLOAT
      },
      trang_thai: {
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
    await queryInterface.dropTable('NguoiDungs');
  }
};