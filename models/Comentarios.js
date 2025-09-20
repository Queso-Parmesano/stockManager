const { DataTypes } = require('sequelize');
const sequelize = require('../config/MySql.js');

const Comentarios = sequelize.define('Comentarios', {
    idComentario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idContenido:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'contenidoComunidad',
            key: 'idContenido'
        }
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'idUser'
        }
    },
    comentario:{
        type: DataTypes.STRING,
        allowNull: false
    },
    calificacion:{
        type: DataTypes.ENUM(['0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'])
    }
}, {
    tableName: 'comentarios',
    timestamps: true,
});

module.exports = Comentarios;