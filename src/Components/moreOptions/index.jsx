import CreateUser from './Components/createUser'
import ModPanel from '../modPanels/modPanelUsers'
import LoadProveedor from './Components/loadProveedor'
import TableWithAction from '../tableWithAction'
import { useState } from "react"

function moreOptions() {
    const [mainFrame, setMainFrame] = useState(0)

    return (
        <>
            {mainFrame === 0 &&
                <div className='sectionBotones'>
                    <div className='sectionVer'>
                        <button onClick={() => setMainFrame(1)}>Cargar nuevo usuario</button>
                        <button onClick={() => setMainFrame(2)}>Ver tabla de usuarios</button>
                    </div>
                    <div className='sectionNuevo'>
                        <button onClick={() => setMainFrame(3)}>Registro de acciones</button>
                        <button onClick={() => setMainFrame(4)}>Cargar nuevo proveedores</button>
                    </div>
                </div>
            }
            
            {mainFrame === 1 && <CreateUser backMethod={setMainFrame}/>}
            {mainFrame === 2 && <TableWithAction endpoint={'getUsers'} ModPanel={ModPanel} title={'Tabla de Usuarios'} backMethod={setMainFrame} />}
            {mainFrame === 3 && <TableWithAction endpoint={'getActions'} ModPanel={ModPanel} title={'Registro de acciones'} backMethod={setMainFrame} />}
            {mainFrame === 4 && <LoadProveedor backMethod={setMainFrame}/>}
        </>
    )

}

export default moreOptions
