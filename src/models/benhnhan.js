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
      allowNull: false,
  },
  ho_ten: {
      type: DataTypes.STRING(50),
      allowNull: false,
  },
  gioi_tinh: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
  },
  tuoi: {
      type: DataTypes.INTEGER,
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
  }, {
    sequelize,
    modelName: 'BenhNhan',
    tableName: 'benh_nhan',
    timestamps: false,
    freezeTableName: true
  });
  return BenhNhan;
};