import React from 'react'
import BurgerButton from './BurgerButton'
import { connect } from 'react-redux'
import * as DATA_REDUCERS from './../../../reducers/reducers'

class BurgerButtonContainer extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.toogleMenu = this.toogleMenu.bind(this)
    }
    toogleMenu() {
        const { openMenu } = this.props
        const { isOpen } = this.state
        openMenu(isOpen)
        this.setState({
            isOpen: !isOpen
        })

    }
    render() {
        const { isMobile } = this.props
        return (
            <BurgerButton isMobile={isMobile} toogleMenu={this.toogleMenu} />
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
            const openMenuPromise = new Promise((resolve, reject) => {
                const mobileMenuOpen = isOpen
                resolve(mobileMenuOpen)
            })
                .then(mobileMenuOpen => {
                    dispatch({
                        type: DATA_REDUCERS.MOBILE_MENU_IS_OPEN,
                        mobileMenuOpen
                    })
                })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BurgerButtonContainer)