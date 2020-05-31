const Sequelize = require('sequelize');

const sequelize = new Sequelize('online-shop', 'root', 'sa1234', {
	dialect: 'mysql',
	host: 'localhost',
});

module.exports = sequelize;
