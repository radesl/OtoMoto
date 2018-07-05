import React from 'react'
import ChooseTypeLabel from './ChooseTypeLabel'

class ChooseTypeLabelContainer extends React.PureComponent {
    constructor() {
        super()
        this.renderLabel = this.renderLabel.bind(this)
    }
    renderLabel() {
        const { labels } = this.props
        console.log('ChooseTypeLabelContainer', labels)
        return labels && labels.map((label, id) => {
            return <ChooseTypeLabel label={label} key={id} />
        })
    }
    render() {
        const renderLabel = this.renderLabel()
        return (
            <div>
                {renderLabel}
            </div>
        )
    }
}
export default ChooseTypeLabelContainer