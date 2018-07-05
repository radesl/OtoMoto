import React from 'react'
import ChooseTypeLabel from './../DiscoverySectionElemets/ChooseTypeLabel'

const ProductDiscoverySection = props => {
    const { labels } = props
    return (
        <div>
            <ChooseTypeLabel labels={labels} />
        </div>
    )
}
export default ProductDiscoverySection