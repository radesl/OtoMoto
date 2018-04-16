import React from 'react'
import { Link } from 'react-router-dom'

const MobileAddAdvertisement = props => {
    const { title } = props
    return (
        <Link to=''>
            <div>
                <div>{title}</div>
            </div>
        </Link>
    )
}
export default MobileAddAdvertisement