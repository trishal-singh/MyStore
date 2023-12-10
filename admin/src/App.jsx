
import './App.css'
import {Link} from 'react-router-dom'
function App() {
  

  return (
    <>
      <div class="logo">MyStore</div>
      <p class="description">Welcome to MyStore admin app use the buttons below to add or remove data.</p>
      <div class="buttons">
      <Link to="/add"><button>ADD</button></Link>
      <Link to="/delete"><button>DELETE</button></Link>
      </div>
    </>
  )
}

export default App
