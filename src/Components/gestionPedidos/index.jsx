import LoadMatPrima from './Components/loadMatPrima'
import TableWithAction from '../tableWithAction'
import LoadPedMatPrima from './Components/loadPedMatPrima'
import ModPanelPedMatPrima from '../modPanels/modPanelPedMatPrima'
import ModPanelInfoProv from '../modPanels/modPanelInfoProv'
import { useState, useEffect } from 'react'
import './gestionPedidos.css'

function gestionPedidos({ view }) {
    const [mainFrame, setMainFrame] = useState(0)

    useEffect(() => {
        if(view){
            setMainFrame(view)
        }
    }, [])

    return (
        <>

            {
                mainFrame === 0 &&

                <div className='sectionBotones'>
                    <div className='sectionVer'>
                        <button onClick={() => setMainFrame(1)}>Pedidos de Materia Prima</button>
                        <button onClick={() => setMainFrame(2)}>Tabla de Proveedores</button>
                    </div>
                    <div className='sectionNuevo'>
                        <button onClick={() => setMainFrame(3)}>Cargar Materia Prima nueva</button>
                        <button onClick={() => setMainFrame(4)}>Cargar pedido nuevo de Mat. Prima</button>
                    </div>
                </div>
            }

            {mainFrame === 1 && (
                <TableWithAction endpoint={'pedidosMatPrima'} ModPanel={ModPanelPedMatPrima} title={'Pedidos Mat. Prima'} backMethod={setMainFrame} />

            )}{
                mainFrame === 2 && (
                    <TableWithAction endpoint={'infoProv'} ModPanel={ModPanelInfoProv} title={'Tabla de Proveedores'} backMethod={setMainFrame} />
                )
            }{
                mainFrame === 3 && <LoadMatPrima backMethod={setMainFrame} />
            }{
                mainFrame === 4 && <LoadPedMatPrima backMethod={setMainFrame} />
            }
        </>
    )

}

export default gestionPedidos
