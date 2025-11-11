import sequelize from '../config/MySql.js'
import { DataTypes } from 'sequelize'

const UserPerfil = sequelize.define('UserPerfil', {
    idUserPerf:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'usuarios',
            key: 'idUser'
        }
    },
    nombres:{
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos:{
        type: DataTypes.STRING,
        allowNull: false
    },    
    telefono: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    enviarInfo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    certDeComunidad:{
        type: DataTypes.ENUM(['0', '1']),
        defaultValue: '0'
    },
    ban:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }
},{
    tableName: 'userPerfil',
    timestamps: true,
},)

export default UserPerfil;