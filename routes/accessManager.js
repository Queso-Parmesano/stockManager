import tokenValidation from '../middleware/tokenValidation.js'
import UsuariosInv from '../database/models/UsuariosInv.js'
import Roles from '../database/models/Roles.js'
import jwt from 'jsonwebtoken'
import express from 'express'

const router = express.Router()

router.post('/login', async (req, res) => {

    const { username, password } = req.body

    await UsuariosInv.findAll({
        where: {
            username: username, 
            password: password
        },
        include: [{
            model: Roles,
        }]
    })
    .then(user => {
        
        if(user.length === 0){
            return res.status(401).send('Invalid credentials')
        }else{
            const idUser = user[0].dataValues.idUserInv
            const nombreRol = user[0].dataValues.Role.dataValues.nombre

            const token = jwt.sign({idUser: idUser, rol: nombreRol}, process.env.secretWord, {expiresIn: '1h'})
            res.cookie('token', token, {httpOnly: true, sameSite: 'lax'})
            return res.status(200).json({message: 'Login successful'})
        }
    })

})

router.post('/logout', (req, res) => {
    res.clearCookie('token')
    return res.status(200).json({message: 'Logout successful'})
})

router.post('/registerUser', (req, res) => {
    // Lógica para registrar un nuevo usuario
    // de parte de la aplicacion
})

router.get('/check-auth', tokenValidation, (req, res) => {
    
    const rolName = req.user.rol
    
    return res.status(200).json({rol: rolName})

})

export default router
