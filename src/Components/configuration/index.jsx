import './configuration.css'
import { useState, useEffect } from "react"
import BackButton from '../backButton'

function configuration({ backMethod }) {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [username, setUsername] = useState('')
    const [dni, setDni] = useState('')
    const [telefono, setTelefono] = useState('')
    const [passw, setPassw] = useState('')

    useEffect(() => {
        const getDataAccount = () => {
            fetch('http://localhost:3000/frontend/dataAccount', { credentials: 'include' })
                .then(res => res.json())
                .then(data => {
                    setNombre(data.nombre)
                    setApellido(data.apellido)
                    setUsername(data.username)
                    setDni(data.dni)
                    setTelefono(data.telefono)
                    setPassw(data.passw)
                })
        }

        getDataAccount()

    })

    return (
        <>
            <div className='header'>
                <BackButton metodoAUsar={backMethod} />
                <h2>Configuracion</h2>
            </div>
            <div className='sectionInfoAccount'>
                <div className='infoAccount'>
                    <div className='info'>
                        <p>Nombre/s</p>
                        <input value={nombre} onChange={(e) => setNombre(e.target.value)} disabled={true} type='text' />
                    </div>
                    <div className='info'>
                        <p>Apellido/s</p>
                        <input value={apellido} onChange={(e) => setApellido(e.target.value)} disabled={true} type='text' />
                    </div>
                    <button className='infoButton'>Modificar</button>
                    <div className='info'>
                        <p>Username</p>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} disabled={true} type='text' />
                    </div>
                    <div className='info'>
                        <p>Dni</p>
                        <input value={dni} onChange={(e) => setDni(e.target.value)} disabled={true} type='text' />
                    </div>
                    <button className='infoButton'>Guardar</button>
                    <div className='info'>
                        <p>Telefono</p>
                        <input value={telefono} onChange={(e) => setTelefono(e.target.value)} disabled={true} type='text' />
                    </div>
                    <div className='info'>
                        <p>Contraseña</p>
                        <input value={'********'} onChange={(e) => setPassw(e.target.value)} disabled={true} type='text' />
                    </div>
                    <button className='infoButton'>Cancelar</button>
                </div>
            </div>
            <div className='line'></div>
            <div className='sectionChangeColor'>
                <h2>Colores del entorno</h2>
                <div className='changeColor'>
                    <div className='optionsColors'>
                        <div>
                            <p>Colores de los botones</p>
                        </div>
                        <button>Cambiar</button>
                    </div>
                    <div className='optionsColors'>
                        <div>
                            <p>Otros</p>
                        </div>
                        <button>Cambiar</button>
                    </div>
                    <div className='optionsColors'>
                        <div>
                            <p>Colores de los fondos</p>
                        </div>
                        <button>Cambiar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default configuration