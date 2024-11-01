'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LichHen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LichHen.init({
    ma_lich_hen: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ghi_chu: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    trang_thai: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    ngay_hen: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ma_nguoi_dung: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ma_benh_nhan: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'LichHen',
    tableName: 'lich_hen',
    freezeTableName: true,
    timestamps: false
  });
  return LichHen;
};