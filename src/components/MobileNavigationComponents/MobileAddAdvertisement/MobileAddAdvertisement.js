import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import addIcon from './../../../../resources/icons/add-16px.png'

const MobileAddAdvertisement = props => {
    const { title } = props
    return (
        <Link to=''>
            <div className='MobileAddAdvertisement'>
                <img className='MobileAddAdvertisement__addIcon' src={addIcon} />
                <div className='MobileAddAdvertisement__title'>{title}</div>
            </div>
        </Link>
    )
}
export default MobileAddAdvertisement