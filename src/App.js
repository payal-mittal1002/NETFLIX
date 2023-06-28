import './App.scss'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
     
    
    </BrowserRouter>
  );
}

export default App;
