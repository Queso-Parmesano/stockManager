import { DataTypes } from 'sequelize'
import sequelize from '../config/MySql.js'

const Roles = sequelize.define('Roles', {
    idRol:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'roles',
    timestamps: false,

});

export default Roles;