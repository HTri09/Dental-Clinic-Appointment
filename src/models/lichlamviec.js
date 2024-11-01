'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LichLamViec extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LichLamViec.init({
    ma_lich: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ngay: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ca: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ma_nguoi_dung: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'LichLamViec',
    tableName: 'lich_lam_viec',
    timestamps: false,
    freezeTableName: true
  });
  return LichLamViec;
};