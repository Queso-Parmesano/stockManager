import sequelize from '../config/MySql.js'
import { DataTypes } from 'sequelize'

const Proveedor = sequelize.define('Proveedor', {
    idProveedor:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nombreEmpresa:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    nombreResponsable:{ 
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidoResponsable:{ 
        type: DataTypes.STRING,
        allowNull: false
    },
    dniResponsable:{ 
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    direccion:{ 
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono:{ 
        type: DataTypes.STRING,
        allowNull: false
    },
    mail:{ 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
},{
    tableName: 'Proveedores',
    timestamps: true,
})

export default Proveedor;