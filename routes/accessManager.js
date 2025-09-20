import jwt from 'jsonwebtoken'
import express from 'express'

const router = express.Router()

router.post('/login', (req, res) => {

    const { username, password } = req.body
    if(username !== 'admin' || password !== 'admin'){
        return res.status(401).send('Invalid credentials')
    }else{
        const token = jwt.sign({idUser: 1, username: 'alberto'}, 'secretKey', {expiresIn: '1h'})
        res.cookie('token', token, {httpOnly: true, sameSite: 'lax'})
        return res.status(200).json({message: 'Login successful'})
    }

})

router.post('/logout', (req, res) => {
    res.clearCookie('token')
    return res.status(200).json({message: 'Logout successful'})
})

router.post('/registerUser', (req, res) => {
    // Lógica para registrar un nuevo usuario
    // de parte de la aplicacion
})

export default router
