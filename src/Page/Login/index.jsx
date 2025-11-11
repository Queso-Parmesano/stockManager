import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import './Login.css'

function Home(){
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()
    
    const reqLogin = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({username, password})
        })
        .then(res => {
            if(res.ok){
                navigate('/panel')
            }
        })
        
    }

    return (
        <div className='login'>
            <div className='loginHead'>
                <h2>Inicie Sesion</h2>
            </div>
            <form onSubmit={reqLogin}>
                <label htmlFor="user">Username</label>
                <input required type="text" name="user" id="user" placeholder='Username' value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                <label htmlFor="password">Password</label>
                <input required type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e) => {setpassword(e.target.value)}}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )

}

export default Home
