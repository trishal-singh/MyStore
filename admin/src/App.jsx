
import './App.css'
import {Link} from 'react-router-dom'
import Button from './components/Button'
function App() {
  

  return (
    <>
      <div className="logo">MyStore</div>
      <p className="description">Welcome to MyStore admin app use the buttons below to add or remove data.</p>
      <div className="buttons">
      <Link to="/add"><Button text="ADD"/></Link>
      <Link to="/delete"><Button text="DELETE"/></Link>
      
      </div>
    </>
  )
}

export default App
