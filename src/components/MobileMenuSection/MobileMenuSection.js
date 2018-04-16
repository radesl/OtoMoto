import React from 'react'
import MobileAddAdvertisement from './../MobileNavigationComponents/MobileAddAdvertisement'
import Favorite from './../MobileNavigationComponents/Favorite'
import MyOtoMoto from './../MobileNavigationComponents/MyOtoMoto'
import './style.scss'

const MobileMenuSection = () => {
    return (
        <div className='MobileMenuSection'>
            <MobileAddAdvertisement title='add advertisement' />
            <Favorite />
            <MyOtoMoto />
        </div>
    )
}
export default MobileMenuSection