import RegistroAcciones from './models/RegistroAcciones.js'
import UsuariosInv from './models/UsuariosInv.js'
import UserPerfil from './models/UserPerfil.js'
import PedidosMat from './models/PedidosMat.js'
import StockInv from './models/StockInv.js'
import StockMat from './models/StockMat.js'
import Usuarios from './models/Usuarios.js'
import Pedidos from './models/Pedidos.js'
import Roles from './models/Roles.js'
import Proveedor from './models/Proveedor.js'


//hasOne uno a uno(cuando la foreignkey esta en otro modelo)
//belongsTo uno a uno (cuando la foreignkey esta en este modelo)
//hasMany uno a muchos(cuando la foreignkey esta en otro modelo)
//belongsToMany muchos a muchos(cuando la foreignkey esta en este modelo)

PedidosMat.belongsTo(StockMat, {
    foreignKey: 'idMat'
})
StockMat.hasMany(PedidosMat, {
    foreignKey: 'idMat'
})

Pedidos.belongsTo(Usuarios, {
    foreignKey: 'idUser'
})
Usuarios.hasMany(Pedidos, {
    foreignKey: 'idUser'
})

RegistroAcciones.belongsTo(UsuariosInv, {
    foreignKey: 'idUserInv'
})
Usuarios.hasMany(RegistroAcciones, {
    foreignKey: 'idUserInv'
})

Roles.hasMany(UsuariosInv, {
    foreignKey: 'idRol'
})
UsuariosInv.belongsTo(Roles, {
    foreignKey: 'idRol'
})

Usuarios.belongsTo(Roles, {
    foreignKey: 'idRol'
})
Roles.hasMany(Usuarios, {
    foreignKey: 'idRol'
})

UserPerfil.belongsTo(Usuarios, {
    foreignKey: 'idUser'
})
Usuarios.hasOne(UserPerfil, {
    foreignKey: 'idUser'
})

Proveedor.hasMany(StockMat,{
    foreignKey: 'idProveedor'
})

StockMat.belongsTo(Proveedor,{
    foreignKey: 'idProveedor'
})

export { Pedidos, RegistroAcciones, Roles, StockInv, Usuarios, UsuariosInv, StockMat, UserPerfil, Proveedor }