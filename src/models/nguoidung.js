'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NguoiDung extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NguoiDung.init({
    ma_nguoi_dung: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    ho_ten: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    cccd: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
    so_dien_thoai: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    dia_chi: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    gioi_tinh: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    ngay_sinh: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    vai_tro: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    ten_dang_nhap: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    mat_khau: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    he_so_luong: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    trang_thai: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'NguoiDung',
    tableName: 'nguoi_dung',
    freezeTableName: true,
    timestamps: false
  });
  return NguoiDung;
};