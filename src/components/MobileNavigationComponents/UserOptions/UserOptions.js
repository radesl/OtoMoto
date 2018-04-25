import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const UserOptions = props => {
    const { title } = props
    return (
        <Link to=''>
            <div className='UserOptions'>
                {title}
            </div>
        </Link>
    )
}
export default UserOptions