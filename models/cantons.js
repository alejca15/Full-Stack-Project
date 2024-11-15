"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Cantons extends Model {
    static associate(models) {
      //--------Relaciones-------//

      //Belongs To
      this.belongsTo(models.Provinces, { foreignKey: "province_id" });
     
      //Has Many
      this.hasMany(models.Addresses, { foreignKey: "canton_id" });
    }
  }
  Cantons.init(
    {
      canton_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      province_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Provinces",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Cantons",
    }
  );
  return Cantons;
};