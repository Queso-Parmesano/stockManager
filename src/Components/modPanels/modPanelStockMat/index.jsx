import { useState, useEffect } from "react"
import './modPanelStockMat.css'

function modPanelStockMat({ metodos }) {
    const [panelView, setPanelView] = useState(0)
    const [proveedores, setProveedores] = useState([])
    const [proveedor, setProveedor] = useState('')
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')

    useEffect(() => {
        const getProveedores = () => {
            fetch('http://localhost:3000/frontend/getProveedores', { credentials: 'include' })
                .then(res => res.json())
                .then(data => setProveedores(data))
        }
        getProveedores()
    }, [])

    const goToCreatPed = () => {
        metodos[0](3)
        metodos[1](4)
    }

    const edit = (e) => {
        e.preventDefault()
    }

    const deleteItem = (e) => {
        
    }

    return (
        <>
            {panelView === 0 &&
                <>
                    <button className="butDisplay" onClick={goToCreatPed}>Crear Pedido</button>
                    <button className="butDisplay" onClick={() => { setPanelView(2) }}>Editar</button>
                    <button className="butDisplay" onClick={() => { setPanelView(3) }}>Eliminar</button>
                </>
            }{panelView === 2 &&
                <div className="content">
                    <h2>Modificar materia prima</h2>
                    <form className="formStockMat" onSubmit={edit}>
                        <div className="inputs">
                            <div className="input">
                                <label htmlFor="">Nombre</label>
                                <input type="text" value={nombre} onChange={(e) => {setNombre(e.target.value)}} required />
                            </div>
                            <div className="input">
                                <label htmlFor="">Descripcion</label>
                                <input type="text" value={descripcion} onChange={(e) => {setDescripcion(e.target.value)}} required />
                            </div>
                            <div className="input">
                                <label htmlFor="">Proveedor</label>
                                <select value={proveedor} onChange={(e) => {setProveedor(e.target.value)}}>
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
                            <div className="input">
                                <label htmlFor="">Precio x UN</label>
                                <input type="text" value={precio} onChange={(e) => {setPrecio(e.target.value)}} required />
                            </div>
                        </div>
                        <div className="apply">
                            <button type="submit">Aplicar</button>
                            <button type="reset" onClick={() => setPanelView(0)}>Cancelar</button>
                        </div>
                    </form>
                </div>
            }{panelView === 3 &&
                <div className="areYouSure">
                    <h2>Estas seguro de esta accion?</h2>
                    <div className="buttonsSure" onSubmit={deleteItem}>
                        <button className="butApply" type="submit">Aplicar</button>
                        <button className="butApply" type="reset" onClick={() => setPanelView(0)}>Cancelar</button>
                    </div>
                </div>
            }
        </>
    )

}

export default modPanelStockMat
