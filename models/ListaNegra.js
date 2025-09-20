const { DataTypes } = require('sequelize');
const sequelize = require('../config/MySql.js');

const ListaNegra = sequelize.define('ListaNegra', {
    idBan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true, 
        allowNull: false
    },
    idUserPerf: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'userPerfil',
            key: 'idUserPerf'
        }
    },
    motivo: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'listaNegra',
    timestamps: true,
},)

module.exports = ListaNegra;