'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DichVu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DichVu.init({
    ma_dich_vu: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ma_loai: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ten: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    don_vi: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    gia: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'DichVu',
    tableName: 'dich_vu',
    freezeTableName: true,
    timestamps: false
  });
  return DichVu;
};