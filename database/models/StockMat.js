import sequelize from '../config/MySql.js'
import { DataTypes } from 'sequelize'

const StockMat = sequelize.define('StockMat', {
    idMat:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    idProveedor:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Proveedores',
            key: 'idProveedor'
        }
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion:{
        type: DataTypes.STRING,
        allownull: false
    },
    cantidad:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precioXUn:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
},{
    tableName: 'stockMat',
    timestamps: true,
})

export default StockMat