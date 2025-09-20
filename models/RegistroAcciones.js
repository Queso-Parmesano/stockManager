const { DataTypes } = require('sequelize');
const sequelize = require('../config/MySql.js');

const RegistroAcciones = sequelize.define('RegistroAcciones', {
    idAccion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    },
    idUserInv:{
        type: DataTypes.INTEGER,
        references:{
            model:'usuariosInv',
            key: 'idUserInv'
        }
    },
    accion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha:{
        type: DataTypes.DATE,
        allowNull: false
    },
    hora:{
        type: DataTypes.TIME,
        allowNull: false
    }
},{
    tableName: 'registroAcciones',
    timestamps: true,
});

module.exports = RegistroAcciones;