import style from "./App.module.css";
import { Header } from "./Components/Header/Header";
import { Catalog } from "./Components/Navbar/Catalog/Catalog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MainContent} from "./Components/MainContent/MainContent"
import { Footer } from "./Components/Footer/Footer";
import {AboutCompany} from './Components/Navbar/AboutCompany/AboutCompany'

function App() {
  return (
    <BrowserRouter>
      <div className={style.mainContainer}>
        <Header />
        <Routes>
           <Route path="/catalog" element={<Catalog/>} /> 
           <Route path="/about" element={<AboutCompany/>} /> 
           <Route path="/" element={<MainContent/>} /> 
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
