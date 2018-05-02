import React from 'react'
import { connect } from 'react-redux'
import MobileMenuSection from './MobileMenuSection'

class MobileMenuSectionContainer extends React.PureComponent {
    render() {
        const { mobileMenuOpen, isMobile } = this.props
        return (
            <div>
                <MobileMenuSection
                    mobileMenuOpen={mobileMenuOpen}
                    isMobile={isMobile} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    const { mobileMenuOpen, isMobile } = state
    return { mobileMenuOpen, isMobile }
}
export default connect(mapStateToProps)(MobileMenuSectionContainer)