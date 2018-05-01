import React from 'react'
import { connect } from 'react-redux'
import MobileAddAdvertisement from './../MobileNavigationComponents/MobileAddAdvertisement'
import Favorite from './../MobileNavigationComponents/Favorite'
import MyOtoMoto from './../MobileNavigationComponents/MyOtoMoto'
import './style.scss'

const MobileMenuSection = props => {
    const { isMobile } = props
    return (
        <div className={isMobile
            ? 'MobileMenuSection'
            : 'MobileMenuSection--disable'}>
            <MobileAddAdvertisement title='add advertisement' />
            <Favorite title='Favorite:' />
            <MyOtoMoto title='My Otomoto:' />
        </div>
    )
}
const mapStateToProps = state => {
    const { isMobile } = state
    return { isMobile }
}
export default connect(mapStateToProps)(MobileMenuSection)