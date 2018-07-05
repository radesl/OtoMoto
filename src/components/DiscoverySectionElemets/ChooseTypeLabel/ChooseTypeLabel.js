import React from 'react'

const ChooseTypeLabel = props => {
    console.log(props)
    const { label } = props
    return (
        <div>
            <div>{label}</div>
        </div>
    )
}
export default ChooseTypeLabel