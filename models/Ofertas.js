const { DataTypes } = require('sequelize');
const sequelize = require('../config/MySql.js');

const Ofertas = sequelize.define('Ofertas', {
    idOferta:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    },

    porcenOff:{
        type: DataTypes.ENUM(['5', '10', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75'])
    }
},{
    tableName: 'ofertas',
    timestamps: true,

});

module.exports = Ofertas;