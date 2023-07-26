'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sqlite3 = require('sqlite3').verbose();
const sequelize = new Sequelize({
  dialect: 'sqlite',
  dialectModule: sqlite3,
  storage: 'gian.sqlite'
});

const Author = sequelize.define('Author', {
  name: DataTypes.STRING,
  name_2: DataTypes.STRING,
});

const db = {};
db['Author'] = Author;

module.exports = db;
