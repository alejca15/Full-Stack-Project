"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Meetings extends Model {
    static associate(models) {
      //--------Relaciones-------//

      
      //Belongs To
      this.belongsTo(models.Athletes, { foreignKey: "athlete_id" });
    }
  }
  Meetings.init(
    {
      meeting_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      meeting_initial_date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      meeting_final_date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      meeting_URL: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Meetings",
    }
  );
  return Meetings;
};
