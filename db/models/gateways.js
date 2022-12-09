'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gateways extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  };
  gateways.init({
    gateway_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
    kernel_version: DataTypes.STRING,
    jm_event_type: DataTypes.STRING,
    firmware_version: DataTypes.STRING,
    architecture: DataTypes.STRING,
    model: DataTypes.STRING,
    home_id: DataTypes.STRING,
    serial: DataTypes.STRING,
    time_zone: DataTypes.STRING,
    skin: DataTypes.STRING,
    devices: DataTypes.JSONB,
    items: DataTypes.JSONB,
  }, {
    sequelize,
    modelName: 'gateways',
  });
  return gateways;
};
