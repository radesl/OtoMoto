import React from 'react'
import { Link } from 'react-router-dom'

const UserOptions = props => {
    const { title } = props
    return (
        <Link to=''>
            <div>{title}</div>
        </Link>
    )
}
export default UserOptions