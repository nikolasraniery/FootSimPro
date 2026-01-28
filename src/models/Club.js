const { DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const Club = sequelize.define('Club', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  country: {
    type: DataTypes.STRING,
  },
  league: {
    type: DataTypes.STRING,
  },
  budget: {
    type: DataTypes.FLOAT,
    defaultValue: 5000000.0,
  },
  reputation: {
    type: DataTypes.INTEGER,
    defaltValue: 50,
  },
  stadiumName: {
    type: DataTypes.STRING,
    defaultValue: 'Estádio Municipal',
  },
  logoUrl: {
    type: DataTypes.STRING,
  },
});

module.exports = Club;
