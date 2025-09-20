const { DataTypes } = require('sequelize');
const sequelize = require('../config/MySql.js');

const Sanciones = sequelize.define('Sanciones', {
    idSancion:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false 
    },
    idUser:{
        type: DataTypes.INTEGER,
        references:{
            model: 'usuarios',
            key: 'idUser'
        }
    },
    motivo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    numSancion:{
        type: DataTypes.ENUM(['0', '1', '2', '3']),
        defaultValue: '0',
        allowNull: false
    }
},{
    tableName: 'sanciones',
    timestamps: true,
});

module.exports = Sanciones;