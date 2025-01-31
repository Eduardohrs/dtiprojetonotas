import './App.css';

import {Route, Routes} from "react-router-dom";
import StartPage from "./pages/start";
import HomePage from "./pages/home";


export default function PageSelector(){
  return(
    <div>
      <Routes>
      <Route path="/start" element={<StartPage />} />
      <Route path="/dtiprojetonotas" element={<HomePage />} />
      </Routes>
      
    </div>
  );
}
