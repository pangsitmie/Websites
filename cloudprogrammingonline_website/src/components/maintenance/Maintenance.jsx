import React from 'react'
import "./maintenance.css"

import MAINTENANCE from '../../assets/maintenance_img.png'

const Maintenance = () => {
    return (
        <div className="container header__container">
            <div className='maintenance'>
                <div className='maintenance_left'>
                    <h2>Oops!</h2>
                    <h3>Website Under Construction</h3>
                    <p>We are working on it. Please wait for our latest update or contact us for more information.</p>
                    <div className=''>
                        <button className="btn btn-stroke btn_maintenance">
                            <a href="mailto:cloudprogramingservice@gmail.com">
                                Contact Us
                            </a>
                        </button>
                    </div>
                </div>
                <div className='maintenance_right'>
                    <img src={MAINTENANCE} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Maintenance