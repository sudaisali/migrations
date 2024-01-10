const Sequelize = require('sequelize')

const sequelize = new Sequelize('migration', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = sequelize