import React from 'react'
import MobileAddAdvertisement from './../MobileNavigationComponents/MobileAddAdvertisement'
import Favorite from './../MobileNavigationComponents/Favorite'
import MyOtoMoto from './../MobileNavigationComponents/MyOtoMoto'
import './style.scss'

const MobileMenuSection = props => {
    const { isMobile, mobileMenuOpen } = props
    return (
        <div className={isMobile && mobileMenuOpen
            ? 'MobileMenuSection'
            : 'MobileMenuSection--disable'}>
            <MobileAddAdvertisement title='add advertisement' />
            <Favorite title='Favorite:' />
            <MyOtoMoto title='My Otomoto:' />
        </div>
    )
}
export default MobileMenuSection