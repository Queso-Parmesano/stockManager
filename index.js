import { Pedidos, RegistroAcciones, Roles, StockInv, Usuarios, UsuariosInv, StockMat, UserPerfil, Proveedor } from './database/Relaciones.js'
import tokenValidation from './middleware/tokenValidation.js'
import insertDataInDB from './database/insertDataDb.js'
import sequelize from './database/config/MySql.js'
import LoginRoute from './routes/accessManager.js'
import onlyAdmin from './middleware/onlyAdmin.js'
import FrontendRoute from './routes/frontend.js'
import ActionsRoutes from './routes/actions.js'
import AdminRoutes from './routes/admin.js'
import cookieParser from 'cookie-parser'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const port = 3000
const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: process.env.frontUrl,
    credentials: true, 
}))

async function initSQLDatabase() {
    await sequelize.authenticate()
    await sequelize.sync({ force: true })
}

console.clear()

await initSQLDatabase()
.then(async () => {
    console.log('Database connection established successfully!')
    await insertDataInDB()
})
.catch((err) => console.log(err))

//app.use(getToken) // uso de middleware global para verificar token en todas las rutas

app.use(LoginRoute)

app.use('/frontend', tokenValidation, FrontendRoute)

app.use('/admin', onlyAdmin, AdminRoutes)

app.use('/actions', tokenValidation, ActionsRoutes)

app.listen(port, () => console.log(`API listening at http://localhost:${port}`))
