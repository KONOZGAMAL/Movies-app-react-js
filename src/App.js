
import {React} from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';
import NotFound from './Pages/Pagenotfound';
import { Route, Routes } from "react-router";
function App() {
  return (
    <div className="App">
        <div>
        <Header/>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie/:movieId" element={<Details/>}/>
          <Route path="*" element={<NotFound />}></Route>  
       </Routes>
        </div>
    </div>
  );
}
export default App;
