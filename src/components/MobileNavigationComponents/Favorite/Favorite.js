import React from 'react'
import UserTypes from './../UserTypes'
import './style.scss'

const Favorite = props => {
    const { title } = props
    return (
        <div className='Favorite'>
            <div className='Favorite__title'>{title}</div>
            <div className='Favorite__elements'>
                <UserTypes title='Advertisement' />
            </div>
            <div className='Favorite__elements'>
                <UserTypes title='Search' />
            </div>
        </div>
    )
}
export default Favorite