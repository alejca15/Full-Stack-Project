"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Counselors extends Model {
    static associate(models) {
      //--------Relaciones-------//

      //Belongs to
      this.belongsTo(models.Locations, { foreignKey: "location_id" });
    }
  }
  Counselors.init(
    {
      counselor_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      counselor_first_lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      counselor_second_lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin_mail: { 
        type: DataTypes.STRING, 
        allowNull: false,
        unique:true,
      },
      counselor_location: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
      },
      counselor_phone: { 
        type: DataTypes.STRING, 
        allowNull: false,
        unique:true,
      },
    },
    {
      sequelize,
      modelName: "Counselors",
    }
  );
  return Counselors;
};
