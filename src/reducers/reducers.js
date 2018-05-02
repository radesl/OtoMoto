import { connect } from 'react-redux'

const defaultState = {
    isMobile: null,
    mobileMenuOpen: false
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
            return newState
        }
        case MOBILE_MENU_IS_OPEN: {
            const newState = Object.assign({}, state, {
                mobileMenuOpen: action.mobileMenuOpen
            })
            return newState
        }
        default: return defaultState
    }
}

export const IS_MOBILE = 'IS_MOBILE'
export const IS_NOT_MOBILE = 'IS_NOT_MOBILE'
export const MOBILE_MENU_IS_OPEN = 'MOBILE_MENU_IS_OPEN'