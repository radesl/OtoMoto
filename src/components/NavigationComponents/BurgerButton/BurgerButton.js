import React from 'react'
import './style.scss'
import Burger from './../../../../resources/icons/burger-24px.png'

const BurgerButton = props => {
    const { isMobile, toogleMenu } = props
    return (
        <button className={isMobile
            ? 'BurgerButton'
            : 'BurgerButton--hidden'}
            onClick={toogleMenu}>
            <img src={Burger} />
        </button>
    )
}
export default BurgerButton