import GestionPedidos from '../../Components/gestionPedidos'
import Configuration from '../../Components/configuration'
import MoreOptions from '../../Components/moreOptions'
import TableWithAction from '../../Components/tableWithAction'
import ModPanelStockMat from '../../Components/modPanels/modPanelStockMat'
import ModPanelStockInv from '../../Components/modPanels/modPanelStockInv'
import MenuPanel from '../../Components/menuPanel'
import UserPanel from '../../Components/userPanel'
import { useState } from 'react'
import './Panel.css'

function Panel({ rol }) {
    const [sectionSelect, setSection] = useState(0)
    const [subSeccion, setSubSeccion] = useState(null)

    return (
        <main>
            <MenuPanel rol={rol} setSection={setSection} buttons={sectionSelect} />
            <div className='panelMain'>
                <div className='mainSection'>
                    {
                        sectionSelect === 0
                        &&
                        <UserPanel />
                    }{
                        sectionSelect === 1
                        &&
                        <TableWithAction endpoint={'tableStockMat'} ModPanel={ModPanelStockMat} title={'Inventario Mat. Prima'} backMethod={setSection} methodsButton={[setSection, setSubSeccion]} />
                    }{
                        sectionSelect === 2
                        &&
                        <TableWithAction endpoint={'tableStockInv'} ModPanel={ModPanelStockInv} title={'Inventario productos'} backMethod={setSection} />
                    }{
                        sectionSelect === 3
                        &&
                        <GestionPedidos view={subSeccion}/>
                    }{
                        sectionSelect === 4
                        &&
                        <Configuration backMethod={setSection} />
                    }{
                        sectionSelect === 5
                        &&
                        <MoreOptions />
                    }
                </div>
            </div>
        </main>
    )
}

export default Panel
