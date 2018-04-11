import React from 'react'
import App from './App'
import { connect } from 'react-redux'
import * as DATA_REDUCER from './../../reducers/reducers'

class AppContainer extends React.PureComponent {
    componentDidMount() {
        const { checkResolution } = this.props
        window.addEventListener('resize', checkResolution)
    }
    render() {
        return (
            <App />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkResolution: width => {
            const checkResolutionOfSite = new Promise((resolve, reject) => {
                const width = window.innerWidth
                resolve(width)
            })
                .then(width => {
                    if (width < 768) {
                        dispatch({ type: DATA_REDUCER.IS_MOBILE })
                    }
                    if (width >= 768) {
                        dispatch({ type: DATA_REDUCER.IS_NOT_MOBILE })
                    }
                })
        }
    }
}
export default connect(null, mapDispatchToProps)(AppContainer)