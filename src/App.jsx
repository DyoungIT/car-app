import style from "./App.module.css";
import { Header } from "./Components/Header/Header";
import { Catalog } from "./Components/Navbar/Catalog/Catalog";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className={style.mainContainer}>
        <Header />
        <Routes>
           <Route path="/catalog" element={<Catalog/>} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
