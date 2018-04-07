import { connect } from 'react-redux'

const defaultState = {
    isMobile: null
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case IS_MOBILE: {
            const newState = Object.assign({}, state, {
                isMobile: true
            })
            return newState
        }
        case IS_NOT_MOBILE: {
            const newState = Object.assign({}, state, {
                isMobile: false
            })
            return sewState
        }
        default: defaultState
    }
}

export const IS_MOBILE = 'IS_MOBILE'
export const IS_NOT_MOBILE = 'IS_NOT_MOBILE'