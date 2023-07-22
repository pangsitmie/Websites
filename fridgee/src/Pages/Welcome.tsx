import React, { useState } from 'react'
import Login from '../components/container/Login'
import WELCOME_IMG from '../assets/welcome_img.jpg'
import Register from '../components/container/Register'


type Props = {}

const Welcome = (props: Props) => {

    const [isRegister, setIsRegister] = useState(false)

    const navigateRegister = () => {
        setIsRegister(true)
    }
    const navigateLogin = () => {
        setIsRegister(false)
    }


    return (
        <div
            className='grid grid-cols-2 items-center py-4 px-[5%]'
        >
            <div className='flex items-center justify-center'>
                <img src={WELCOME_IMG} alt="" className='rounded-2xl h-[80vh]' />
            </div>
            <div className=''>
                {isRegister ? (
                    <Register navigateLogin={navigateLogin} />
                ) : (
                    <Login navigateRegister={navigateRegister} />
                )}
            </div>

        </div>
    )
}

export default Welcome