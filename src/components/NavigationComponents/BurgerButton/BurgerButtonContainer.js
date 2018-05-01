import React from 'react'
import BurgerButton from './BurgerButton'
import { connect } from 'react-redux'
import * as DATA_REDUCERS from './../../../reducers/reducers'

class BurgerButtonContainer extends React.PureComponent {
    constructor() {
        super()
        this.state
    }
    toogleMenu() {
        const { openMenu } = this.props

    }
    render() {
        console.log(this.props)
        const { isMobile, openMenu } = this.props
        return (
            <BurgerButton isMobile={isMobile} openMenu={openMenu} />
        )
    }
}
const mapStateToProps = state => {
    const { isMobile, mobileMenuOpen } = state
    return { isMobile, mobileMenuOpen }
}
const mapDispatchToProps = dispatch => {
    return {
        openMenu: isOpen => {
            const openMenu = new Promise((resolve, reject) => {
                resolve(isOpen)
            })
                .then(isOpen => {
                    console.log(isOpen)
                    dispatch({
                        type: DATA_REDUCERS.MOBILE_MENU_IS_OPEN,
                        mobileMenuOpen: isOpen
                    })
                })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BurgerButtonContainer)