import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ProtectedRoute from './Components/protectedRoute/ProtectedRoute'
import Login from './Page/Login'
import Panel from './Page/Panel'
import './App.css'

function App() {

    return (
        <div></div>, 
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route 
                        path="/panel" 
                        element={
                            <ProtectedRoute rolAuthorizated={['Team', 'Admin']}>
                                {(rol) => <Panel rol={rol} />}
                            </ProtectedRoute>
                        } 
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
