const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://user:localhost:5432/wikidb');

module.exports = sequelize
