import BackButton from '../../../backButton'
import { useState } from "react"

function loadProveedor({ backMethod }){
    const [empresa, setEmpresa] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [cuit, setCuit] = useState('')
    const [direccion, setDireccion] = useState('')
    const [altura, setAltura] = useState('')
    const [telefono, setTelefono] = useState('')
    const [mail, setMail] = useState('')

    return (
        <div className='formSection'>
            <div className='header'>
                <BackButton metodoAUsar={backMethod} />
                <h2>Registro de proveedor</h2>
            </div>
            <form id='formUserCreate' className='registerForm'>
                <div>
                    <label htmlFor="">Nombre de empresa</label>
                    <input value={empresa} onChange={(e) => setEmpresa(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Nombre del representante</label>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Apellido del representante</label>
                    <input value={apellido} onChange={(e) => setApellido(e.target.value)} type="text" />
                </div>
                <div>
                    <label>CUIT</label>
                    <input value={cuit} onChange={(e) => setCuit(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Direccion</label>
                    <input value={direccion} onChange={(e) => setDireccion(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Altura</label>
                    <input value={altura} onChange={(e) => setAltura(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Telefono de contacto</label>
                    <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Mail de contacto</label>
                    <input value={mail} onChange={(e) => setMail(e.target.value)} type="text" />
                </div>
            </form>
            <button className='createButton' type="submit" form='formUserCreate'>Enviar</button>
        </div>
    )

}

export default loadProveedor
