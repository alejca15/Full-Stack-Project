"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Provinces extends Model {
    static associate(models) {
      //--------Relaciones-------//


      //Has many
      this.hasMany(models.Cantons, { foreignKey: "province_id" });
      this.hasMany(models.Addresses, { foreignKey: "province_id" });
    }
  }
  Provinces.init(
    {
      province_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Provinces",
    }
  );
  return Provinces;
};
