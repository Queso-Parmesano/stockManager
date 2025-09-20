import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import './tableMenu.css'

function tableMenu(){

    return(
        <table>
            <tr className = 'line1'>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Proveedor</th>
                <th>Cantidad</th>
            </tr>
            <tr>
                <td>tela</td>
                <td>tela roja, muy roja</td>
                <td>Pedro Cetro</td>
                <td>10000</td>
            </tr>
            <tr>
                <td>tela</td>
                <td>tela roja, muy roja</td>
                <td>Pedro Cetro</td>
                <td>10000</td>
            </tr>
            <tr>
                <td>tela</td>
                <td>tela roja, muy roja</td>
                <td>Pedro Cetro</td>
                <td>10000</td>
            </tr>
            <tr>
                <td>tela</td>
                <td>tela roja, muy roja</td>
                <td>Pedro Cetro</td>
                <td>10000</td>
            </tr>
            <tr>
                <td>tela</td>
                <td>tela roja, muy roja</td>
                <td>Pedro Cetro</td>
                <td>10000</td>
            </tr>
            <tr>
                <td>tela</td>
                <td>tela roja, muy roja</td>
                <td>Pedro Cetro</td>
                <td>10000</td>
            </tr>
        </table>
    )

}

export default tableMenu
