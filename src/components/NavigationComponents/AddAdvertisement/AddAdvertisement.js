import React from 'react'
import './style.scss'

const AddAdvertisement = props => {
    const { advertisementContent } = props
    return (
        <div className='AddAdvertisement'>
            <button>{advertisementContent}</button>
        </div>
    )
}
export default AddAdvertisement