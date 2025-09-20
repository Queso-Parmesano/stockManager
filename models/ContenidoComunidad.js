const { DataTypes } = require('sequelize');
const sequelize = require('../config/MySql.js');

const ContenidoComunidad = sequelize.define('ContenidoComunidad', {
    idContenido:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    idUser:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'usuarios',
            key: 'idUser'
        }
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    rutaImg:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    calificacion:{
        type: DataTypes.ENUM(['0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'])
    }
},{
    tableName: 'contenidoComunidad',
    timestamps: true,

});

module.exports = ContenidoComunidad;