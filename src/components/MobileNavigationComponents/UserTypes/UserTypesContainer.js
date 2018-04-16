import React from 'react'
import UserTypes from './UserTypes'

class UserTypesContainer extends React.PureComponent {
    render() {
        const { title } = this.props
        return (
            <div>
                <UserTypes title={title}/>
            </div>
        )
    }
}
export default UserTypesContainer