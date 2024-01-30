import React from 'react'
import ReactDOM from 'react-dom/client'
import Auth from './Pages/Auth.jsx'
import Shop from './Pages/Shop.jsx'
import About from './Pages/About.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Shop/>}/>
    <Route path="/auth" element={<Auth/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
