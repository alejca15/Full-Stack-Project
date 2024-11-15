'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Athlete_sizes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shoe_size_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"Shoe_size_id",
          key:"id",
        },
      },
      shirt_size_id:  {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"Shirt_size_id",
          key:"id",
        },
      },
      athlete_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"Athlete",
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
    await queryInterface.dropTable('Athlete_sizes');
  }
};