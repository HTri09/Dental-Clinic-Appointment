'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LoaiDichVu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LoaiDichVu.init({
    ma_loai_dich_vu: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ten_ten_dich: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'LoaiDichVu',
    tableName: 'loai_dich_vu',
    freezeTableName: true,
    timestamps: false
  });
  return LoaiDichVu;
};