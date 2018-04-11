import React from 'react'
import BurgerButton from './BurgerButton'
import { connect } from 'react-redux'

class BurgerButtonContainer extends React.PureComponent {
    render() {
        const { isMobile } = this.props
        return (
            <BurgerButton isMobile={isMobile} />
        )
    }
}
const mapStateToProps = state => {
    const { isMobile } = state
    return { isMobile }
}
export default connect(mapStateToProps)(BurgerButtonContainer)