'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('gateways', {
      gateway_id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kernel_version: {type: Sequelize.STRING},
      jm_event_type: {type: Sequelize.STRING},
      firmware_version: {type: Sequelize.STRING},
      architecture: {type: Sequelize.STRING},
      model: {type: Sequelize.STRING},
      home_id: {type: Sequelize.STRING},
      serial: {type: Sequelize.STRING},
      time_zone: {type: Sequelize.STRING},
      skin: {type: Sequelize.STRING},
      devices: {type: Sequelize.JSONB},
      items: {type: Sequelize.JSONB},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('gateways');
  }
};
