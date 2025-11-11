import { useEffect, useState } from 'react'
import './pedidosMatPrima.css'

function pedidosMatPrima() {
    const [pedidosMat, setPedidosMat] = useState([])

    useEffect(() => {
        const loadPedidos = () => {
            fetch('http://localhost:3000/frontend/pedidosMatPrima', { credentials: 'include' })
                .then(res => res.json())
                .then(data => setPedidosMat(data))
        }
        loadPedidos()
    }, [])

    return (

        <div className="tablaPedMatPrimas-wrapper">
            <table className="tablaPedMatPrimas">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Materia Prima</th>
                        <th>Cantidad</th>
                        <th>Precio x UN</th>
                        <th>Precio Total</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pedidosMat.length === 0
                            ?
                            <tr>
                                <td colSpan={7}>No existe pedidos de materiales</td>
                            </tr>
                            :
                            pedidosMat.map(c => {
                                return (
                                    <tr>
                                        <td>{c.idPedidoMat}</td>
                                        <td>{c.StockMat.nombre}</td>
                                        <td>{c.cantidad}</td>
                                        <td>{c.StockMat.precioXUn}</td>
                                        <td>{c.idPedidoMat}</td>
                                        <td>{c.estado}</td>
                                        <td><button>Acciones</button></td>
                                    </tr>
                                )

                            }
                            )
                    }
                </tbody>
            </table>
        </div>

    )

}

export default pedidosMatPrima
