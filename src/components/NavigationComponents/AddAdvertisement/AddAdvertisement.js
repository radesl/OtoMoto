import React from 'react'
import './style.scss'
import addIcon from './../../../../resources/icons/add-16px.png'

const AddAdvertisement = props => {
    const { advertisementContent } = props
    return (
        <div className='AddAdvertisement'>
            <button className='AddAdvertisement__button'>
                <div className='AddAdvertisement__button__addIcon'>
                    <img src={addIcon} />
                </div>
                <div className='AddAdvertisement__button__buttonContent'>{advertisementContent}</div>
            </button>
        </div>
    )
}
export default AddAdvertisement