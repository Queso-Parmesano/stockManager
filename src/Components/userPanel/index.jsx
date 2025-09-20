import './userPanel.css'

function userPanel() {

    return (
        <div className='userPanel'>
            <div className='logo'>
                <h1>A</h1>
            </div>
            <div className='datos'>
                <div className='dato'>
                    <h2>Nombre</h2>
                    <h3>Alberto</h3>
                </div>
                <div className='dato'>
                    <h2>Dni</h2>
                    <h3>12345678</h3>
                </div>
                <div className='dato'>
                    <h2>Rol</h2>
                    <h3>Team</h3>
                </div>
            </div>
        </div>
    )

}

export default userPanel
