//terminado por el momento
const { DataTypes } = require('sequelize');
const sequelize = require('../config/MySql.js');

const StockInv = sequelize.define('StockInv', {
    idInv: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    },
    idOferta:{
        type: DataTypes.INTEGER,
        references:{
            model: 'ofertas',
            key: 'idOferta'
        }
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    rutaImg:{
        type: DataTypes.STRING,
        allowNull: false
    },
    talle:{
        type: DataTypes.STRING,
        allowNull: false
    },
    precio:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    stockDisponible:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    stockEnPedido:{
        type: DataTypes.INTEGER,
        deafault: 0,
        allowNull: false
    },
    mostrar:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    }

},{
    tableName: 'stockInv',
    timestamps: true,
});

module.exports = StockInv;