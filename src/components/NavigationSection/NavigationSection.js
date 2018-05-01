import React from 'react'
import { connect } from 'react-redux'
import Header from './../NavigationComponents/Header'
import MobileMenuSection from './../MobileMenuSection'
import './style.scss'

const NavigationSection = props => {
    const { isMobile } = props
    return (
        <div className='NavigationSection'>
            <div className={isMobile
                ? 'NavigationSection__wrapper'
                : 'NavigationSection__wrapper--disable'}>
                <div className='NavigationSection__wrapper__buyerSection'>
                    <Header />
                </div>
                <MobileMenuSection />
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    const { isMobile } = state
    return { isMobile }
}
export default connect(mapStateToProps)(NavigationSection)