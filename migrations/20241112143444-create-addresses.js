'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      province_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"Provinces",
          key:"id",
        },
      },
      canton_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"Cantons",
          key:"id",
        },
      },
      direction_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"Directions",
          key:"id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Addresses');
  }
};