'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sqlite3 = require('sqlite3').verbose();
const sequelize = new Sequelize({
  dialect: 'sqlite',
  dialectModule: sqlite3,
  storage: 'gian.sqlite'
});

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  email: DataTypes.STRING,
});

const db = {};
db['User'] = User;

module.exports = db;
