import React from 'react'
import BurgerButton from './../BurgerButton'
import Logo from './../Logo'
import AddAdvertisement from './../AddAdvertisement'
import './style.scss'

const Header = () => {
    return (
        <div className='Header'>
            <div className='Header__firstPart'>
                <div className='Header__firstPart__burgerPart'>
                    <BurgerButton />
                </div>
                <div className='Header__firstPart__logoPart'>
                    <Logo logoName='OTOMOTO' />
                </div>
            </div>
            <div className='Header__secondPart'>
                <AddAdvertisement advertisementContent='add advertisement' />
            </div>
        </div>
    )
}
export default Header