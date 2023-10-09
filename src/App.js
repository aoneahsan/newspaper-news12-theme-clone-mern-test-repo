
import './App.css';
import Home from "./Components/pages/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
  <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}  />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
