import React from 'react'
import { connect } from 'react-redux'
import Header from './../NavigationComponents/Header'

import './style.scss'

const NavigationSection = props => {
    const { isMobile } = props
    return (
        <div className='NavigationSection'>
            <div className='NavigationSection__buyerSection'>
                <Header />
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    const { isMobile } = state
    return { isMobile }
}
export default connect(mapStateToProps)(NavigationSection)