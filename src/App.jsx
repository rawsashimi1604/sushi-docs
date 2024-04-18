import React from 'react'
import "@fontsource/roboto";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource/berkshire-swash";
import "animate.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/*" element={<NotFound404 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App