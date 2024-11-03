'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BenhNhan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BenhNhan.init({
    ma_benh_nhan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    ho_ten: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gioi_tinh: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    tuoi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    so_dien_thoai: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dia_chi: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'BenhNhan',
    tableName: 'benh_nhan',
    timestamps: false,
    freezeTableName: true
  });
  return BenhNhan;
};