import jwt from 'jsonwebtoken'

function tokenValidation(req, res, next) {
    const token = req.cookies.token

    try {
        const payload = jwt.verify(token, process.env.secretWord)
        req.user = payload
    } catch (error) {
        return res.status(401).json({message: 'Invalid token'})
    }

    next()

}

export default tokenValidation
