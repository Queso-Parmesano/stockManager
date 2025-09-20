import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './Page/Login'
import Panel from './Page/Panel'
import './App.css'

function App() {

    return (
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/panel" element={<Panel />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
