const { DataTypes}  = require('sequelize')
const sequelize = require('../config/database')

const Person = sequelize.define('Person', {
  first_name: {
    type: DataTypes.STRING
  },
  last_name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
}
, {
    tableName: 'Person',
    timestamps: true,
    underscored: true, 
    createdAt: 'created_at', 
    updatedAt: 'updated_at'
    
  });


module.exports = {Person}