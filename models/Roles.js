const { DataTypes } = require('sequelize');
const sequelize = require('../config/MySql.js');

const Roles = sequelize.define('Roles', {
    idRol:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    },
    nombres:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'roles',
    timestamps: true,

});

module.exports = Roles;