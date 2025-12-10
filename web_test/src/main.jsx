import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 1. 新增這一行
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. 用 BrowserRouter 包住 App */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)