import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
      <App />
    </div>
  </React.StrictMode>
)
