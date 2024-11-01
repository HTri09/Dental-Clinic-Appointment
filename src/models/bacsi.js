'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BacSi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BacSi.init({
    ma_nguoi_dung: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
  },
  ma_chuyen_mon: {
      type: DataTypes.INTEGER,
      allowNull: true
  }
  }, {
    sequelize,
    modelName: 'BacSi',
    tableName: 'bac_si',
    freezeTableName: true,
    timestamps: false
  });
  return BacSi;
};