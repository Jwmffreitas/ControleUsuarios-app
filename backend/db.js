const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/users.db'
  })
 
module.exports = sequelize;