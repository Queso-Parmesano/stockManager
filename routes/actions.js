import RegistroAcciones from '../database/models/RegistroAcciones.js'
import UsuariosInv from '../database/models/UsuariosInv.js'
import StockMat from '../database/models/StockMat.js'
import express from 'express'

const router = express.Router()

router.post('/loadPedidoMat', async (req, res) => {
    const { idMaterial, cantidad, estado } = req.body
    const { idUser } = req.body

    try {
        await PedidosMat.create({
            idMat: idMaterial,
            cantidad: cantidad,
            estado: estado
        })

        var contAccion = ''

        await RegistroAcciones.create({ idUserInv: idUser, involucracion: contAccion, accion: 'Creacion de pedido de materia prima' })
        return res.status(200).json({ message: 'Pedido creado correctamente' })
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear el pedido' })
    }

})

router.post('/createMat', async (req, res) => {

    const { nombre, descripcion, proveedor, precioXUn } = req.body

    try {
        await StockMat.create({
            nombre: nombre,
            descripcion: descripcion,
            idProveedor: proveedor,
            precioXUn: precioXUn,
            cantidad: 0
        })

        var contAccion = ''

        await RegistroAcciones.create({ idUserInv: idUser, involucracion: contAccion, accion: 'Creacion de materia prima' })
        return res.status(200).json({ message: 'Material creado correctamente' })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Error al crear el material' })
    }

})

router.post('/createUser', async (req, res) => {

    const { nombre, apellido, username, password, telefono, dni, correo, rol } = req.body

    const idUser = req.user.idUser

    try {
        await UsuariosInv.create({
            idRol: rol,
            username: username,
            password: password,
            nombres: nombre,
            apellidos: apellido,
            telefono: telefono,
            dni: dni,
            correo: correo
        })

        var contAccion = ''

        await RegistroAcciones.create({ idUserInv: idUser, involucracion: contAccion, accion: 'Creacion de usuario' })
        return res.status(200).json({ message: 'Usuario creado con exito' })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Error al crear el usuario' })
    }

})

router.post('/editMatPrima', async (req, res) => {

    const { nombre, descripcion, proveedor, precioXUn, idMatPrima } = req.body

    try {

        await StockMat.update({
            nombre: nombre,
            descripcion: descripcion,
            idProveedor: proveedor,
            precioXUn: precioXUn
        }, {
            where: { idMatPrima: idMatPrima }
        })
        await RegistroAcciones.create({ idUserInv: idUser, involucracion: contAccion, accion: 'Creacion de usuario' })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Error al modificar la materia prima' })
    }

})

router.post('/deleteMatPrima', async (req, res) => {
    const { idMatPrima } = req.body

    try {
        await StockMat.destroy({
            where: { idMatPrima: idMatPrima }
        })
        await RegistroAcciones.create({ idUserInv: idUser, involucracion: contAccion, accion: `Elimino la materia prima con id:${idMatPrima}` })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Error al eliminar la materia prima' })
    }
})

export default router
