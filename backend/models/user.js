const Sequelize = require('sequelize');
const database = require('../db');
 
const User = database.define('user', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    avatar: Sequelize.STRING,
})
 
module.exports = User;