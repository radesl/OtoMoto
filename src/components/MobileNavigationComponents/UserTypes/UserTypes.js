import React from 'react'
import { Link } from 'react-router-dom'

const UserTypes = props => {
    const { title } = props
    return (
        <Link to=''>
            <div>{title}</div>
        </Link>
    )
}
export default UserTypes