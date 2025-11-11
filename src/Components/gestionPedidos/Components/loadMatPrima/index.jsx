import { useState, useEffect } from "react"
import BackButton from '../../../backButton'

function loadMatPrima({ backMethod }) {
    const [proveedores, setProveedores] = useState([])
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [proveedor, setProveedor] = useState('')
    const [precio, setPrecio] = useState('')

    const saveMat = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/actions/createMat', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre,
                descripcion: descripcion,
                proveedor: proveedor,
                precioXUn: precio
            })
        })
            .then(res => {
                console.log(res.ok)
                // desarrollar una forma d avisar q se cargo con exito
            })
    }

    useEffect(() => {
        const getProveedores = () => {
            fetch('http://localhost:3000/frontend/getProveedores', { credentials: 'include' })
                .then(res => res.json())
                .then(data => setProveedores(data))
        }
        getProveedores()
    }, [])

    return (
        <div className='formSection'>
            <div className='header'>
                <BackButton metodoAUsar={backMethod} />
                <h2>Creacion de Mat. Prima</h2>
            </div>
            <form id='formUserCreate' className='registerForm' onSubmit={saveMat}>
                <div>
                    <label>Nombres</label>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Descripcion</label>
                    <input value={descripcion} onChange={(e) => setDescripcion(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Precio x Un</label>
                    <input value={precio} onChange={(e) => setPrecio(e.target.value)} type="text" />
                </div>
                <div>
                    <label htmlFor="">Proveedor</label>
                    <select value={proveedor} onChange={(e) => setProveedor(e.target.value)}>
                        <option value="0">Seleccione uno</option>
                        {
                            proveedores.length > 0

                            &&

                            proveedores.map((c, _) => {
                                return (
                                    <option value={c.idProveedor}>{c.nombreEmpresa}</option>
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

export default loadMatPrima
