'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sqlite3 = require('sqlite3').verbose();
const sequelize = new Sequelize({
  dialect: 'sqlite',
  dialectModule: sqlite3,
  storage: 'gian.sqlite'
});

const Workshop = sequelize.define('Workshop', {
  name: DataTypes.STRING,
  held_by_id: DataTypes.NUMBER,
  color: DataTypes.STRING,
});

const db = {};
db['Workshop'] = Workshop;

module.exports = db;
