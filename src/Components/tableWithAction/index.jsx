import { useEffect, useState } from "react"
import BackButton from '../backButton'
import ActionButton from '../actionButton'
import './tableWithAction.css'

function TableWithAction({ endpoint, ModPanel, title, backMethod, methodsButton }) {
    const [heads, setHeads] = useState([])
    const [contenido, setContenido] = useState([])

    useEffect(() => {
        const getTable = async () => {
            try {
                const res = await fetch(`http://localhost:3000/frontend/${endpoint}`, { credentials: 'include' })
                const data = await res.json()
                setHeads(data.heads)
                setContenido(data.contenido)
            } catch (e) {
                console.error(e)
            }
        }
        getTable()
    }, [endpoint])

    return (
        <>
            <div className='header'>
                <BackButton metodoAUsar={backMethod} />
                <h2>{title}</h2>
            </div>
            <div className='tableWrapper'>
                <table className="infoTable">
                    <thead>
                        <tr>
                            {
                                heads.length === 0 ?
                                    <th colSpan={1}>Sin encabezados</th>
                                    :
                                    heads.map((c, i) => (
                                        <th key={i}>{c}</th>
                                    )
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contenido.length === 0 ?
                                <tr>
                                    <td colSpan={heads.length || 1}>Sin datos</td>
                                </tr>
                                :
                                contenido.map((fila, i) => (
                                    <tr key={i}>
                                        {
                                            fila.map((c, j) => (
                                                <td key={j}>{c}</td>
                                            ))
                                        }
                                        <td>
                                            <ActionButton ContPanel={ModPanel} metodos={methodsButton}/>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableWithAction
