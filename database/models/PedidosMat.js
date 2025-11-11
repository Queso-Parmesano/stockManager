import { DataTypes } from "sequelize"
import sequelize from "../config/MySql.js"

const PedidosMat = sequelize.define('PedidosMat', {

    idPedidoMat: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idMat: {
        type: DataTypes.INTEGER,
        allowNull: false,
        regferences: {
            model: 'StockMat',
            key: 'idMat'
        }
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    estado: {
        type: DataTypes.ENUM(['No salio', 'Despachado', 'En Camino', 'Con retraso', 'Completado']),
        allowNull: false,
    },
    llegadaEstimada: {
        type: DataTypes.DATE,
        allowNull: true,
    }
},{

})

export default PedidosMat
