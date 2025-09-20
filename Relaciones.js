const ContenidoComunidad = require('./models/ContenidoComunidad.js')
const RegistroAcciones = require('./models/RegistroAcciones.js')
const Comentarios = require('./models/Comentarios.js')
const UsuariosInv = require('./models/UsuariosInv.js')
const ListaNegra = require('./models/ListaNegra.js')
const UserPerfil = require('./models/UserPerfil.js')
const Sanciones = require('./models/Sanciones.js')
const StockInv = require('./models/StockInv.js')
const StockMat = require('./models/StockMat.js')
const Usuarios = require('./models/Usuarios.js')
const Ofertas = require('./models/Ofertas.js')
const Pedidos = require('./models/Pedidos.js')
const Roles = require('./models/Roles.js')

//hasOne uno a uno(cuando la foreignkey en otro modelo)
//belongsTo uno a uno (cuando la foreignkey esta en este modelo)
//hasMany uno a muchos(cuando la foreignkey en otro modelo)
//belongsToMany muchos a muchos(cuando la foreignkey esta en este modelo)

//1 contenido puede tener muchos Comentarios

Comentarios.belongsTo(ContenidoComunidad, {
    foreignKey: 'idContenido'
})
ContenidoComunidad.hasMany(Comentarios,{
    foreignKey: 'idContenido'
})

//1 contenido de la comunidad solo puede tener 1 usuario

ContenidoComunidad.belongsTo(Usuarios, {
    foreignKey: 'idUser'
})
Usuarios.hasOne(ContenidoComunidad, {
    foreignKey: 'idUser'
})

//1 ban es para 1 persona

ListaNegra.belongsTo(UserPerfil, {
    foreignKey: 'idUserPerf'
})
UserPerfil.hasOne(ListaNegra, {
    foreignKey: 'idUserPerf'
})

//1 oferta puede tener muchas prendas y una prenda solo puede tener 1 oferta 

Ofertas.hasMany(StockInv, {
    foreignKey: 'idOferta'
})
StockInv.belongsTo(Ofertas, {
    foreignKey: 'idOferta'
})

//1 Pedidos puede tener un solo user y un user puede tener muchos Pedidos

Pedidos.belongsTo(Usuarios, {
    foreignKey: 'idUser'
})
Usuarios.hasMany(Pedidos, {
    foreignKey: 'idUser'
})

//1 accion solo puede un user pero 1 user puede tener muchas acciones

RegistroAcciones.belongsTo(UsuariosInv, {
    foreignKey: 'idUserInv'
})
Usuarios.hasMany(RegistroAcciones, {
    foreignKey: 'idUserInv'
})

//una sancion solo puede tener 1 user pero un user puede tener varias Sanciones

Sanciones.belongsTo(Usuarios, {
    foreignKey: 'idUser'
})
Usuarios.hasMany(Sanciones, {
    foreignKey: 'idUser'
})

//Un user puede tener 1 solo rol pero 1 rol puede tener varios users

Usuarios.belongsTo(Roles, {
    foreignKey: 'idRol'
})
Roles.hasMany(Usuarios, {
    foreignKey: 'idRol'
})

//Un perfil solo puede tener un solo usuario, y un usuario solo puede tener un solo perfil

UserPerfil.belongsTo(Usuarios, {
    foreignKey: 'idUser'
})
Usuarios.hasOne(UserPerfil, {
    foreignKey: 'idUser'
})

//un comentario puede tener un solo usuario, pero un usuario puede tener muchos Comentarios
Comentarios.belongsTo(Usuarios, {
    foreignKey: 'idUser'
})
Usuarios.hasMany(Comentarios, {
    foreignKey: 'idUser'
})

module.exports = { Comentarios, ContenidoComunidad, ListaNegra, Ofertas, Pedidos, RegistroAcciones, Roles, Sanciones, StockInv, Usuarios, UsuariosInv, StockMat, UserPerfil };