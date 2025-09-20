import MenuPanel from '../../Components/menuPanel'
import UserPanel from '../../Components/userPanel'
import TableMenu from '../../Components/tableMenu'
import './Panel.css'

function Panel(){


    return (
        <main>
            <MenuPanel/>
            <div className='panelMain'>
                {/* <UserPanel/> */}
                <TableMenu/>
            </div>
        </main>
    )
}

export default Panel
