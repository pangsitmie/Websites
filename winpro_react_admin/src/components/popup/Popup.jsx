import React from 'react'

const Popup = (props) => {
    return (props.trigger) ? (
        <div>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup