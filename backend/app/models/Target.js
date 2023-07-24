'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sqlite3 = require('sqlite3').verbose();
const sequelize = new Sequelize({
  dialect: 'sqlite',
  dialectModule: sqlite3,
  storage: 'gian.sqlite'
});

const Target = sequelize.define('Target', {
  name: DataTypes.STRING,
  color: DataTypes.STRING,
});

const db = {};
db['Target'] = Target;

module.exports = db;
