import { useState } from 'react'
import './actionButton.css'

function ActionButton({ ContPanel, metodos }) {
    const [displayOn, setDisplayOn] = useState(false)
    
    const handleClickOutside = (e) => {
        if (e.target.classList.contains('window')) {
            setDisplayOn(false)
        }
    }

    return (
        <div className="dropdown" > 
            <button onClick={() => setDisplayOn(true)} className="dropbtn">Modificar</button>
            {
                displayOn &&
                <div className="window" onClick={handleClickOutside}>
                    <div className="display">
                        <ContPanel metodos={metodos}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default ActionButton