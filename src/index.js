import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import { BrowserRouter, Routes , Route } from "react-router-dom";
import SingleCardPage from "./component/SingleCardPage/SingleCardPge"
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import CategoryDeatil from "./component/Categories/CategoryDetail";
import './css/styles.css';// For Login and Singin
ReactDOM.render(
 
    <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route exact path = "/" element = {<App/>}/>
      <Route path = "products/:id" element = {<SingleCardPage/>}/>
      <Route  path = "categories/:name" element = {<CategoryDeatil/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  
  ,
  document.getElementById('root')
);

