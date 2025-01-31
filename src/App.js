import './App.css';

import {Route, Routes} from "react-router";
import StartPage from "./pages/start";
import HomePage from "./pages/home";


export default function PageSelector(){
  return(
    <div>
      <Routes>
      <Route path="/start" element={<StartPage />} />
      <Route path="/" element={<HomePage />} />
      </Routes>
      
    </div>
  );
}
