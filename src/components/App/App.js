import React from 'react'
import NavigationSection from './../NavigationSection'
import MobileMenuSection from './../MobileMenuSection'
import ProductDiscoverySection from './../ProductDiscoverySection'
import './style.scss'

const App = () => {
    return (
        <div className='App'>
            <div className='App__MobileMenu'>
                <MobileMenuSection />
            </div>
            <div className='App__Content'>
                <NavigationSection />
                <ProductDiscoverySection
                    labels={[
                        ['car'],
                        ['parts'],
                        ['motorcycles'],
                        ['delivery van'],
                        ['trucks', 'trucks'],
                        ['buiding car']
                        ['sidecars'],
                        ['agricultural machines']
                    ]} />
            </div>
        </div>
    )
}
export default App