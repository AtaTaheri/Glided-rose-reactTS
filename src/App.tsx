import React from 'react';
import HeaderLayout from "./ui/layouts/Header";
import MainPage from "./ui/pages/MainPage";
// @ts-ignore
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import AddPage from "./ui/pages/AddPage";


const App = () => {

  return (
      <BrowserRouter>
        <HeaderLayout/>
        <Routes>
          <Route path='/' element={<MainPage/>}>
          </Route>
          <Route path='/add' element={<AddPage/>}>
          </Route>
        </Routes>

      </BrowserRouter>
  );
}


export default App;
