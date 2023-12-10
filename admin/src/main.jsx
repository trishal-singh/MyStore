import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Add from './pages/Add.jsx'
import Delete from './pages/Delete.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route index element={<App />} />
      <Route path="/add" element={<Add/>}/>
      <Route path="/delete" element={<Delete/>}/>
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
)
