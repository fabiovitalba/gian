'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sqlite3 = require('sqlite3').verbose();
const sequelize = new Sequelize({
  dialect: 'sqlite',
  dialectModule: sqlite3,
  storage: 'gian.sqlite'
});

const UserList = sequelize.define('UserList', {
  user_id: DataTypes.NUMBER,
  name: DataTypes.STRING,
});

const db = {};
db['UserList'] = UserList;

module.exports = db;
