import BackButton from '../../../backButton'
import { useState } from "react"

function loadPedMatPrima({ backMethod }){
    const [materia, setProveedor] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [entrega, setEntrega] = useState('')
    const [estado, setEstado] = useState('')

    return (
        <div className='formSection'>
            <div className='header'>
                <BackButton metodoAUsar={backMethod} />
                <h2>Creacion de pedido Mat. Prima</h2>
            </div>
            <form id='formUserCreate' className='registerForm'>
                
                <div>
                    <label htmlFor="">Materia Prima</label>
                    <select value={materia} onChange={(e) => setProveedor(e.target.value)}>
                        <option value="0">Seleccione uno</option>
                    </select>
                </div>
                <div>
                    <label>Cantidad</label>
                    <input value={cantidad} onChange={(e) => setCantidad(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Fecha de llegada</label>
                    <input value={entrega} onChange={(e) => setEntrega(e.target.value)} type="text" />
                </div>
                <div>
                    <label htmlFor="">Estado</label>
                    <select value={estado} onChange={(e) => setEstado(e.target.value)}>
                        <option value="0">Recien Pedido</option>
                        <option value="0">Salio</option>
                        <option value="0">Llego</option>
                        <option value="0">En demora</option>
                        <option value="0">No salio</option>
                    </select>
                </div>
            </form>
            <button className='createButton' type="submit" form='formUserCreate'>Enviar</button>
        </div>
    )

}

export default loadPedMatPrima
