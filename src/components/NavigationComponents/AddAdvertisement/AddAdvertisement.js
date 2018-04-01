import React from 'react'

const AddAdvertisement = props => {
    const { advertisementContent } = props
    return (
        <button>{advertisementContent}</button>
    )
}
export default AddAdvertisement