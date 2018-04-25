import React from 'react'
import UserOptions from './../UserOptions'
import './style.scss'

const MyOtoMoto = props => {
    const { title } = props
    return (
        <div className='MyOtoMoto'>
            <div className='MyOtoMoto__title'>{title}</div>
            <div className='MyOtoMoto__elements'>
                <UserOptions title='login' />
            </div>
            <div className='MyOtoMoto__elements'>
                <UserOptions title='register' />
            </div>
            <div className='MyOtoMoto__elements'>
                <UserOptions title='dealer account' />
            </div>
        </div>
    )
}
export default MyOtoMoto