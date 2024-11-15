'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Admins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      admin_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      admin_lastname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      admin_email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
      },
      admin_phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
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
    await queryInterface.dropTable('Admins');
  }
};