import React from 'react'
import './style.scss'
import Burger from './../../../../resources/icons/burger-24px.png'

const BurgerButton = () => {
    return (
        <button className='BurgerButton'>
            <img src={Burger}/>
        </button>
    )
}
export default BurgerButton