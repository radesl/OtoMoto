import React from 'react'
import './style.scss'

const Logo = props => {
    const { logoName } = props
    return (
        <div className='Logo'>
            <a>{logoName}</a>
        </div>
    )
}
export default Logo