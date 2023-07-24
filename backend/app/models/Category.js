'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sqlite3 = require('sqlite3').verbose();
const sequelize = new Sequelize({
  dialect: 'sqlite',
  dialectModule: sqlite3,
  storage: 'gian.sqlite'
});

const Category = sequelize.define('Category', {
  name: DataTypes.STRING,
  parent_id: DataTypes.NUMBER,
  color: DataTypes.STRING,
});

const db = {};
db['Category'] = Category;

module.exports = db;
