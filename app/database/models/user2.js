const { DataTypes}  = require('sequelize')
const sequelize = require('../config/database')

const User = sequelize.define('user', {
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
    tableName: 'user',
    timestamps: true,
    underscored: true, 
    createdAt: 'created_at', 
    updatedAt: 'updated_at'
    
  });

 
sequelize.sync()

module.exports = {User}

