import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from'./Pages/Home';
import List from './Pages/List';
import Hotel from'./Pages/Hotel';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/hotels" element={<List/>}></Route>
    <Route path="/hotels/:id" element={<Hotel/>}></Route>
   </Routes>

   </BrowserRouter>
  );
}

export default App;
