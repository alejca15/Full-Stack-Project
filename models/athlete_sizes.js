"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Athlete_sizes extends Model {
    static associate(models) {}
  }
  Athlete_sizes.init(
    {
      shoe_size_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:"Shoe_sizes",
          key:"id"
        }
      },

      shirt_size_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:"Shirt_sizes",
          key:"id"
        }
      },
      athlete_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:"Athletes",
          key:"id"
        }
      },
    },
    {
      sequelize,
      modelName: "Athlete_sizes",
    }
  );
  return Athlete_sizes;
};
