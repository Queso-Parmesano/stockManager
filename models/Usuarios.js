const { DataTypes } = require('sequelize');
const sequelize = require('../config/MySql.js');

const Usuarios = sequelize.define('Usuarios', {
    idUser: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    idRol:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'roles',
            key: 'idRol'
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
        unique: true
    }
},{
    tableName: 'usuarios',
    timestamps: true,
},)

module.exports = Usuarios;