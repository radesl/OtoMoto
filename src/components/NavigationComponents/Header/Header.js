import React from 'react'
import BurgerButton from './../BurgerButton'
import Logo from './../Logo'
import AddAdvertisement from './../AddAdvertisement'

const Header = () => {
    return (
        <div>
            <BurgerButton />
            <Logo logoName='OTOMOTO' />
            <AddAdvertisement advertisementContent='add advertisement' />
        </div>
    )
}
export default Header