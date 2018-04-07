import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store'
import App from './components/App'

ReactDom.render(
    <BrowserRouter store={store}>
        <Provider>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'))