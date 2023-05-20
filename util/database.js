const Sequelize = require('sequelize');

const sequelize = new Sequelize ('node-schema', 'root', 'B#5266@belal',
{
  dialect: 'mysql',
   host: 'localhost'
  })

module.exports = sequelize;