module.exports = function(sequelize, DataTypes) {
    var Checkin_parent = sequelize.define("Checkin_parent", {
      par_govt_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        // validate: { 
        //   min: 000000000,
        //   max: 999999999
        // }
      },
      par_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      united_status:{
        type:DataTypes.STRING,
        defaultValue:"Not United", 
        allowNull: false
      },

      time_stamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW  
      },
    //   classMethods: {
    //     associate: function(models) {
    //       Students.hasOne(models.Checkin_parent);
    //     }
    //   },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE 
    });
    
    
    Checkin_parent.associate = function(models) {
      // Associating Checkin_parent with Students
      // When an Author is deleted, also delete any associated Posts
      Checkin_parent.hasMany(models.Students, {
        foreignKey: "par_gvt_id"
      });
    };

    
  
    return Checkin_parent;
  };