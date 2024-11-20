'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments_by_incidents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.STRING
      },
      incident_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"Incidents",
          key:"id",
        },
      },
      counselor_id: {
        type: Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:"Counselors",
          key:"id",
        },
      },
      mentor_id: {
        type: Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:"Mentors",
          key:"id",
        },
      },
      athlete_id: {
        type: Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:"Athletes",
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
    await queryInterface.dropTable('Comments_by_incidents');
  }
};