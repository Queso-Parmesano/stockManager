import sequelize from '../config/MySql.js'
import { DataTypes } from 'sequelize'

const PedidosInv = sequelize.define('PedidosInv', {
    idPedidoInv: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idPedido:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'pedidos',
            key: 'idPedido'
        }
    },
    idPrenda:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'stockInv',
            key: 'idInv'
        }
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subtotal: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    tableName: 'pedidosInv', 
    timestamps: false,
})

export default PedidosInv
