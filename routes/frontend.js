import UsuariosInv from '../database/models/UsuariosInv.js'
import Proveedor from '../database/models/Proveedor.js'
import PedidosMat from '../database/models/PedidosMat.js'
import Materiales from '../database/models/StockMat.js'
import Productos from '../database/models/StockInv.js'
import Actions from '../database/models/RegistroAcciones.js'
import Roles from '../database/models/Roles.js'
import express from 'express'
const router = express.Router()

/*
    
    formateo de data que se envia a una tabla del frontend

    data = {
        head: [ encabezados en orden que van a ir en la tabla ],
        contenido: 
        [
            [ 
 idMaterial -> 1, 
    nombre  ->'Algodon', 
descripcion ->'Algodon de alta calidad', 
                ... en orden segun los encabezados 
            ], [ mas datos ],
            []...
        ]
            
    }

*/


router.get('/userPanel', async (req, res) => {

    const result = await UsuariosInv.findAll({
        where: {
            idUserInv: req.user.idUser,
        },
    })

    const inicial = result[0].dataValues.username.charAt(0).toUpperCase()
    const nombre = result[0].dataValues.username
    const dni = result[0].dataValues.dni


    return res.status(200).json({
        inicial: inicial,
        nombre: nombre,
        dni: dni,
        rol: req.user.rol
    })

})

router.get('/getUsers', async (req, res) => {

    const data = {
        heads: ['Username', 'Nombre', 'Apellido', 'Telefono', 'Dni', 'Correo', 'Contraseña', 'Acciones'],
        contenido: [],
        margin: false,
    }

    const results = await UsuariosInv.findAll({})

    results.map((c, _) => {
        const preData = []
        preData.push(c.dataValues.username)
        preData.push(c.dataValues.nombres)
        preData.push(c.dataValues.apellidos)
        preData.push(c.dataValues.telefono)
        preData.push(c.dataValues.dni)
        preData.push(c.dataValues.correo)
        preData.push(c.dataValues.password)
        data.contenido.push(preData)
    })

    return res.status(200).json(data)

})

router.get('/tableStockMat', async (req, res) => {

    const data = {
        heads: ['Nombre', 'Descripción', 'Proveedor', 'Cantidad', 'Precio x UN', 'Acciones'],
        contenido: [],
        margin: true,
    }

    const results = await Materiales.findAll({
        include: [{
            model: Proveedor,
            attributes: ['nombreEmpresa']
        }]
    })


    results.map((c, _) => {
        const preData = []
        preData.push(c.dataValues.nombre)
        preData.push(c.dataValues.descripcion)
        preData.push(c.dataValues.Proveedor.nombreEmpresa)
        preData.push(c.dataValues.cantidad)
        preData.push(c.dataValues.precioXUn)
        data.contenido.push(preData)
    })

    return res.status(200).json(data)

})

router.get('/tableStockInv', async (req, res) => {

    const data = {
        heads: ['Nombre', 'Descripción', 'Talle', 'Cantidad', 'Precio x UN', 'Acciones'],
        contenido: [],
        margin: true,
    }

    const results = await Productos.findAll({})


    results.map((c, _) => {
        const preData = []
        preData.push(c.dataValues.nombre)
        preData.push(c.dataValues.descripcion)
        preData.push(c.dataValues.talle)
        preData.push(c.dataValues.stockDisponible)
        preData.push(c.dataValues.precio)
        data.contenido.push(preData)
    })

    return res.status(200).json(data)

})

router.get('/pedidosMatPrima', async (req, res) => {

    const data = {
        heads: ['Nombre', 'Cantidad', 'Precio x UN', 'Precio Total', 'Estado', 'Acciones'],
        contenido: [],
        margin: false,
    }

    const results = await PedidosMat.findAll({
        include: [{
            model: Materiales,
            attributes: ['nombre', 'descripcion', 'precioXUn']
        }]
    })

    results.map((c, _) => {
        const preData = []
        const total = c.cantidad * c.StockMat.precioXUn
        preData.push(c.dataValues.StockMat.nombre)
        preData.push(c.dataValues.cantidad)
        preData.push(c.dataValues.StockMat.precioXUn)
        preData.push(total)
        preData.push(c.dataValues.estado)
        data.contenido.push(preData)
    })

    return res.status(200).json(data)

})

router.get('/infoProv', async (req, res) => {

    const data = {
        heads: ['Empresa', 'Nombre', 'Apellido', 'Dni', 'Direccion', 'Telefono', 'Mail', 'Acciones'],
        contenido: [],
        margin: false,
    }

    const results = await Proveedor.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } })

    results.map((c, _) => {
        const preData = []
        preData.push(c.dataValues.nombreEmpresa)
        preData.push(c.dataValues.nombreResponsable)
        preData.push(c.dataValues.apellidoResponsable)
        preData.push(c.dataValues.dniResponsable)
        preData.push(c.dataValues.direccion)
        preData.push(c.dataValues.telefono)
        preData.push(c.dataValues.mail)
        data.contenido.push(preData)
    })

    return res.status(200).json(data)

})

router.get('/getProveedores', async (req, res) => {
    const results = await Proveedor.findAll({ attributes: ['idProveedor', 'nombreEmpresa'] })

    const data = []

    results.map((_, i) => {
        data.push(results[i].dataValues)
    })
    return res.status(200).json(data)

})

router.get('/getRoles', async (req, res) => {
    const result = await Roles.findAll({})

    const data = []

    result.map((_, i) => {
        data.push(result[i].dataValues)
    })

    return res.status(200).json(data)

})

router.get('/dataAccount', async (req, res) => {
    const result = await UsuariosInv.findAll({
        where: {
            idUserInv: req.user.idUser,
        },
    })

    const data = {}

    result.map((c, _) => {
        data.nombre = c.dataValues.nombres
        data.apellido = c.dataValues.apellidos
        data.username = c.dataValues.username
        data.dni = c.dataValues.dni
        data.telefono = c.dataValues.telefono
        data.passw = c.dataValues.password
    })

    return res.status(200).json(data)

})

router.get('/getActions', async (req, res) => {
    const data = {
        heads: ['Nombre', 'Apellido', 'Dni', 'Accion', 'Contenido', 'Acciones'],
        contenido: [],  
        margin: false,
    }

    const result = await Actions.findAll({include: [{model: UsuariosInv}]})

    result.map((c, _) => {
        const preData = []
        preData.push(c.dataValues.UsuariosInv.nombres)
        preData.push(c.dataValues.UsuariosInv.apellidos)
        preData.push(c.dataValues.UsuariosInv.dni)
        preData.push(c.dataValues.accion)
        preData.push(c.dataValues.contenido)
        data.contenido.push(preData)
    })

    return res.status(200).json(data)

})



export default router
