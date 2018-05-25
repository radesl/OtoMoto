import React from 'react'
import { connect } from 'react-redux'
import AddAdvertisement from './AddAdvertisement'
import * as DATA_REDUCER from './../../../reducers/reducers'

class AddAdvertisementContainer extends React.PureComponent {
    render() {
        console.log(this.props)
        const { mobileMenuOpen, isMobile, advertisementContent } = this.props
        return (
            <div>
                <AddAdvertisement
                    mobileMenuOpen={mobileMenuOpen}
                    advertisementContent={advertisementContent}
                    isMobile={isMobile} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    const { mobileMenuOpen, isMobile } = state
    return { mobileMenuOpen, isMobile }
}
export default connect(mapStateToProps)(AddAdvertisementContainer)