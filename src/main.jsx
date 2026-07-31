import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header'
import Body from './components/body'
import appStore from './utils/appStore'
import {Provider} from "react-redux"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
    <Header />
    <Body />

    </Provider>
    
  </StrictMode>,
)
