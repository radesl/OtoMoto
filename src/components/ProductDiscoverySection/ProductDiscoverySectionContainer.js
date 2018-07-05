import React from 'react'
import ProductDiscoverySection from './ProductDiscoverySection'

class ProductDiscoverySectionContainer extends React.PureComponent {
    constructor() {
        super()
        this.renderLabels = this.renderLabels.bind(this)
    }
    renderLabels() {
        const { labels } = this.props
        return labels && labels.map((labels, id) => {
            return <ProductDiscoverySection labels={labels} key={id} />
        })
    }
    render() {
        const renderLabels = this.renderLabels()
        return (
            <div>
                {renderLabels}
            </div>
        )
    }
}
export default ProductDiscoverySectionContainer