const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Save = sequelize.define('Save', {
  saveName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  managerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  currentDate: {
    type: DataTypes.DATE,
    defaultValue: new Date(2026, 0, 1),
  },
  clubId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Save;
