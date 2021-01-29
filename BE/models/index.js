const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env]
const db = {}

// sequelize가 mysql2를 이용해서 node랑 mysql을 열결해줌
const sequelize = new Sequelize(config.database, config.username, config.password, config)

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
