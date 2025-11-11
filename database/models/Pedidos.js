import { DataTypes } from 'sequelize'
import sequelize from '../config/MySql.js'

const Pedidos = sequelize.define('Pedidos', {
    idPedido:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idUser:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'usuarios',
            key: 'idUser'
        }
    },
    metodoDePago:{
        type: DataTypes.STRING,
        allowNull: false
    },
    total:{
        type: DataTypes.DOUBLE,
        allowNull: false
    }
},{
    tableName: 'pedidos',
    timestamps: true,
});

export default Pedidos;