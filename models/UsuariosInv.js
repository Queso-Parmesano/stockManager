const { DataTypes } = require('sequelize');
const sequelize = require('../config/MySql.js');

const UsuariosInv = sequelize.define('UsuariosInv', {
    idUserInv:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    idRol:{
        type: DataTypes.INTEGER,
        references:{
            model: 'roles',
            key: 'idRol'
        }
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            customValidator(value){
                validatePassword(value);
            }
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
    telefono:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    correo:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
        unique: true
    }
},{
    tableName: 'usuariosInv',
    timestamps: true,
});

module.exports = UsuariosInv;