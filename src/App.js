import React from 'react'; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import HeroSlider from './HeroSlider';
import Contactsecond from './Contactsecond';
import Electrical from './Electrical';
import { Route, Routes , Navigate } from 'react-router-dom';
import Civil from './Civil';
import Mech from './Mech';
import Ece from './Ece';
import Chem from './Chem';
import Cse from './Cse';
import MyPopupCard from './MyPopupCard';
import Services from './Services';

const App = () => {
  return (
    <>

    <Routes>
     <Route exact path="/" element={<HeroSlider />} />
      <Route  exact path="/contact" element={<Contactsecond/>} />
      <Route  exact path="/services/" element={<Services/>} />
      <Route  exact path="/electrical" element={<Electrical/>} />
      <Route  exact path="/mechanical" element={<Mech/>} />
      <Route  exact path="/chemical" element={<Chem/>} />
      <Route  exact path="/civil" element={<Civil/>} />
      <Route  exact path="/electronics" element={<Ece/>} />
      <Route  exact path="/computer" element={<Cse/>} />
      <Route  exact path="/mypopupcard" element={<MyPopupCard/>} />
      <Route path="*" element={<Navigate to="/" />} />
      </Routes>
   
   
    </>
  );
};

export default App;

