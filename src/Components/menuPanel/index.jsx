import { useNavigate } from 'react-router-dom'
import './menuPanel.css'

function menuPanel({ rol, setSection, buttons }) {
    const navigate = useNavigate()

    const logOut = () => {
        fetch('http://localhost:3000/logout', {
            method: 'POST',
            credentials: 'include'
        })
            .then(response => {
                if (response.ok) {
                    navigate('/login')
                }
            }
            )
    }

    return (
        <div className="menuPanel">
            <div className="sectionMenu">

                <button className={buttons == 0 ? "opcionMenu active" : "opcionMenu"} onClick={() => setSection(0)}>Perfil</button>

                <button className={buttons == 1 ? "opcionMenu active" : "opcionMenu"} onClick={() => setSection(1)}>Stock de mat. primas</button>

                <button className={buttons == 2 ? "opcionMenu active" : "opcionMenu"} onClick={() => setSection(2)}>Stock de prendas</button>

                <button className={buttons == 3 ? "opcionMenu active" : "opcionMenu"} onClick={() => setSection(3)}>Gestion de pedidos</button>

                <button className={buttons == 4 ? "opcionMenu active" : "opcionMenu"} onClick={() => setSection(4)}>Configuración</button>

                {
                    rol === "Admin"
                    &&
                    (
                        <button className={buttons == 5 ? "opcionMenu active" : "opcionMenu"} onClick={() => setSection(5)}>Más Opciones</button>
                    )
                }

            </div>

            <div className="sectionLogout">
                <button className="logOut" onClick={logOut}>Cerrar sesion</button>
            </div>
        </div >

    )

}

export default menuPanel
