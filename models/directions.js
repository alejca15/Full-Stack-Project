"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Directions extends Model {
    static associate(models) {
      //--------Relaciones-------//

      //Has many
      this.hasMany(models.Addresses, { foreignKey: "direction_id" });
    }
  }
  Directions.init(
    {
      direction: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Directions",
    }
  );
  return Directions;
};