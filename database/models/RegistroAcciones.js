import { DataTypes } from 'sequelize'
import sequelize from '../config/MySql.js'

const RegistroAcciones = sequelize.define('RegistroAcciones', {
    idAccion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    },
    idUserInv:{
        type: DataTypes.INTEGER,
        references:{
            model:'usuariosInv',
            key: 'idUserInv'
        }
    },
    accion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    contenido:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    tableName: 'registroAcciones',
    timestamps: true,
});

export default RegistroAcciones;