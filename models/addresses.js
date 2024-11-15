"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Addresses extends Model {
    static associate(models) {
      //--------Relaciones-------//
      //Has many
      this.hasMany(models.Locations, { foreignKey: "address_id" });
      this.hasMany(models.Athletes, { foreignKey: "address_id" });

      //Belongs To
      this.belongsTo(models.Cantons, { foreignKey: "canton_id" });
      this.belongsTo(models.Provinces, { foreignKey: "province_id" });
      this.belongsTo(models.Direction, { foreignKey: "direction_id" });
    }
  }
  Addresses.init(
    {
      province_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Provinces",
          key: "id",
        },
      },
      canton_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Cantons",
          key: "id",
        },
      },
      direction_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Directions",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Addresses",
    }
  );
  return Addresses;
};