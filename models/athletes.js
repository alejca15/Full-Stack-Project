"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Athletes extends Model {
    static associate(models) {
    //--------Relaciones-------//
      //Has many
      this.hasMany(models.Meetings, { foreignKey: "athlete_id" });
      //Belongs to
      this.belongsTo(models.Addresses, { foreignKey: "address_id" });
      //Belongs to Many
      this.belongsToMany(models.Mentor, { through: "mentors_by_athlete", foreignKey: "athlete_id" });
      this.belongsToMany(models.Shoe_sizes, { through: "Athlete_sizes", foreignKey: "athlete_id" });
      this.belongsToMany(models.Shirts_sizes, { through: "Athlete_sizes", foreignKey: "athlete_id" });
    }
  }
  Athletes.init(
    {
      athlete_name: { 
        type: DataTypes.STRING, 
        allowNull:false 
      },
      athlete_first_lastname: { 
        type: DataTypes.STRING, 
        allowNull:false 
      },
      athlete_second_lastname: { 
        type: DataTypes.STRING, 
        allowNull:false 
      },
      birthday: { 
        type: DataTypes.STRING, 
        allowNull:false 
      },
      nationality:{ 
        type: DataTypes.STRING, 
        allowNull:false 
      },
      gender:{ 
        type: DataTypes.STRING, 
        allowNull:false 
      },
      athlete_mail: { 
        type: DataTypes.STRING, 
        allowNull:false ,
        unique:true
      },
      athlete_phone:{ 
        type: DataTypes.STRING, 
        allowNull:false,
        unique:true
      },
      blood_type: { 
        type: DataTypes.STRING, 
        allowNull:false 
      },
      address_id: { 
        type: DataTypes.INTEGER, 
        allowNull:false,
        references:{
          model:"Addresses",
          key:"id",
        },
      },
      dominant_side:{ 
        type: DataTypes.STRING, 
        allowNull:false 
      },
      education_entity: { 
        type: DataTypes.STRING, 
        allowNull:false 
      },
      actual_grade:{ 
        type: DataTypes.STRING, 
        allowNull:false 
      },
      addition_date: { 
        type: DataTypes.STRING, 
        allowNull:false 
      },
      athlete_status:{ 
        type: DataTypes.STRING, 
        allowNull:false 
      },
    },
    {
      sequelize,
      modelName: "Athletes",
    }
  );
  return Athletes;
};
