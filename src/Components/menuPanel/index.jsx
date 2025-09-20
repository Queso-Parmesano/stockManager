import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import './menuPanel.css'

function menuPanel(){
    const navigate = useNavigate()

    const logOut = () => {
        fetch('http://localhost:3000/logout', {
            method: 'POST',
            credentials: 'include'
        })
        .then(response => {
            if(response.ok){
                navigate('/login')
            }
        }
    )}

    return(
        <div className="menuPanel">
            <section className="sectionMenu">
                <button className="opcionMenu active">Perfil</button>
                <button className="opcionMenu">Ver stock de mat. primas</button>
                <button className="opcionMenu">Ver stock de prendas</button>
                <button className="opcionMenu">Pedidos de materia prima</button>
                <button className="opcionMenu">Configuracion</button>
            </section>
            <section className="sectionLogout">
                <button className="logOut" onClick={logOut}>Cerrar sesion</button>
            </section>
        </div>

    )

}

export default menuPanel
