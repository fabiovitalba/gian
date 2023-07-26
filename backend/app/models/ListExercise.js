'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sqlite3 = require('sqlite3').verbose();
const sequelize = new Sequelize({
  dialect: 'sqlite',
  dialectModule: sqlite3,
  storage: 'gian.sqlite'
});

const ListExercise = sequelize.define('ListExercise', {
  user_id: DataTypes.NUMBER,
  list_id: DataTypes.NUMBER,
  exercise_id: DataTypes.NUMBER,
  position_no: DataTypes.NUMBER,
});

const db = {};
db['ListExercise'] = ListExercise;

module.exports = db;
