import React from 'react'
import Header from './../NavigationComponents/Header'
import MobileMenuSection from './../MobileMenuSection'
import './style.scss'

const NavigationSection = () => {
    return (
        <div className='NavigationSection'>
            <div className='NavigationSection__wrapper'>
                <div className='NavigationSection__wrapper__buyerSection'>
                    <Header />
                </div>
                <MobileMenuSection />
            </div>
        </div>
    )
}
export default NavigationSection