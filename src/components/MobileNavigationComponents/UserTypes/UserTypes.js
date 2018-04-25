import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const UserTypes = props => {
    const { title } = props
    return (
        <Link to=''>
            <div className='UserTypes'>{title}</div>
        </Link>
    )
}
export default UserTypes