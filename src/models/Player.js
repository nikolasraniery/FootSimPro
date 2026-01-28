const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const positions = [
  'ATA',
  'PD',
  'PE',
  'MEI',
  'MD',
  'ME',
  'VOL',
  'ZAG',
  'LD',
  'LE',
  'GOL',
];

const Player = sequelize.define('Player', {
  name: {
    type: DataTypes.STRING,
    defaultValue: 'Fulano',
  },
  age: {
    type: DataTypes.INTEGER,
    defaultValue: 20,
  },
  position: {
    type: DataTypes.STRING,
    defaultValue: positions[0],
  },
  skill: {
    type: DataTypes.INTEGER,
    defaultValue: 20,
  },
  condition: {
    type: DataTypes.INTEGER,
    defaultValue: 100,
  },
  country: {
    type: DataTypes.STRING,
  },
  league: {
    type: DataTypes.STRING,
  },
});

module.exports = Player;
