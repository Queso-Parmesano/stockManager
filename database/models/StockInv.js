import { DataTypes } from 'sequelize'
import sequelize from '../config/MySql.js'

const StockInv = sequelize.define('StockInv', {
    idInv: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    descripcion:{
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
    mostrar:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    }

},{
    tableName: 'stockInv',
    timestamps: true,
});

export default StockInv;