import React from 'react'

const Logo = props => {
    const { logoName } = props
    return (
        <div><a>{logoName}</a></div>
    )
}
export default Logo