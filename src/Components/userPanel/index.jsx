import { useState, useEffect } from "react"
import './userPanel.css'

function userPanel() {
    const [inicial, setInicial] = useState('')
    const [nombre, setNombre] = useState('')
    const [dni, setDni] = useState(0)
    const [rol, setRol] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/frontend/userPanel', {
            method: 'GET',
            credentials: 'include',
        }).then(response => response.json())
            .then(data => {
                setInicial(data.inicial)
                setNombre(data.nombre)
                setDni(data.dni)
                setRol(data.rol)
            })
    }, [])

    return (
        <>
            <div className='logo'>
                <h1>{inicial}</h1>
            </div>
            <div className='datos'>
                <div className='dato'>
                    <h2>Nombre</h2>
                    <h3>{nombre}</h3>
                </div>
                <div className='dato'>
                    <h2>Dni</h2>
                    <h3>{dni}</h3>
                </div>
                <div className='dato'>
                    <h2>Rol</h2>
                    <h3>{rol}</h3>
                </div>
            </div>
        </>
    )

}

export default userPanel
