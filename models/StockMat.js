//terminado por el momento
const { DataTypes } = require('sequelize');
const sequelize = require('../config/MySql.js');

const StockMat = sequelize.define('StockMat', {
    idMat:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion:{
        type: DataTypes.STRING,
        allownull: false
    },
    rutaImg:{
        type: DataTypes.STRING,
        allowNull: false
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'stockMat',
    timestamps: true,
})

module.exports = StockMat