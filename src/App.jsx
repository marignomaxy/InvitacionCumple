import { BrowserRouter as Router } from 'react-router-dom'
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Public from './Routes/public'

function App() {
  return (
    <Router>
      <Public />
    </Router>
  )
}

export default App
