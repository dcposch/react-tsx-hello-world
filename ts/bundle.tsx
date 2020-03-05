import * as React from 'react'
import { render } from 'react-dom'
import App from './view/App'

const container = document.querySelector('#reactRoot')
const root = <App />
render(root, container)
