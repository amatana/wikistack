const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/wikidb', {logging:false});

module.exports = sequelize
