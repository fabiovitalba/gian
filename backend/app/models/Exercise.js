'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sqlite3 = require('sqlite3').verbose();
const sequelize = new Sequelize({
  dialect: 'sqlite',
  dialectModule: sqlite3,
  storage: 'gian.sqlite'
});

const Exercise = sequelize.define('Exercise', {
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  language: DataTypes.STRING,
  author: DataTypes.STRING,
  curator: DataTypes.STRING,
  workshop: DataTypes.STRING,
  category: DataTypes.STRING,
  exhaustion: DataTypes.STRING,
  target: DataTypes.STRING,
  minTime: DataTypes.NUMBER,
  maxTime: DataTypes.NUMBER,
  minParticipants: DataTypes.NUMBER,
  maxParticipants: DataTypes.NUMBER,
});

const db = {};
db['Exercise'] = Exercise;

module.exports = db;
