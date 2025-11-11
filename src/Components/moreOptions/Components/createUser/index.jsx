import { useEffect, useState } from 'react'
import BackButton from '../../../backButton'
import './createUser.css'

function createUser({ backMethod }) {
    const [roles, setRoles] = useState([])
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [dni, setDni] = useState('')
    const [rol, setRol] = useState(1)

    useEffect(() => {
        const getRoles = () => {
            fetch('http://localhost:3000/frontend/getRoles', { credentials: 'include' })
                .then(res => res.json())
                .then(data => setRoles(data))
        }
        getRoles()
    }, [])

    const registerUser = (e) => {

        e.preventDefault()

        fetch('http://localhost:3000/actions/createUser', {
            credentials: 'include',
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                username: username,
                password: password,
                telefono: telefono,
                dni: dni,
                correo: correo,
                rol: rol
            })
        })
    }

    return (
        <div className='formSection'>
            <div className='header'>
                <BackButton metodoAUsar={backMethod} />
                <h2>Creacion de usuario</h2>
            </div>
            <form id='formUserCreate' className='registerForm' onSubmit={registerUser}>
                <div>
                    <label>Nombres</label>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Apellidos</label>
                    <input value={apellido} onChange={(e) => setApellido(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Usuario</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Telefono</label>
                    <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Correo</label>
                    <input value={correo} onChange={(e) => setCorreo(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Dni</label>
                    <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} />
                </div>
                <div>
                    <label>Rol</label>
                    <select value={rol} onChange={(e) => setRol(e.target.value)}>
                        {

                            roles.map((c, _) => {
                                return (
                                    <option value={c.idRol}>{c.nombre}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </form>
            <button className='createButton' type="submit" form='formUserCreate'>Enviar</button>
        </div>

    )

}

export default createUser
