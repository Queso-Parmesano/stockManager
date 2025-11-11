
function onlyAdmin(req, res, next) {
    if(req.user.rol !== 'admin'){
        return res.status(403).json({message: 'Access denied'})
    }
    next()
}

export default onlyAdmin
