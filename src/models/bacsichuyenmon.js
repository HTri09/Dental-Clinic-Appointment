'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BacSiChuyenMon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BacSiChuyenMon.init({
    ma_chuyen_mon: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ten_chuyen_mon: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'BacSiChuyenMon',
    tableName: 'bac_si_chuyen_mon',
    freezeTableName: true,
    timestamps: false,
  });
  return BacSiChuyenMon;
};