import { Routes,Route } from "react-router-dom";
// import Hero from "./pages/Hero";
import Home from "./pages/Home";
// import './App.css'


const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
     </Routes>
    </>
  );
};

export default App;
