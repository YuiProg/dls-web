'use client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./NavBar";
import Home from "./Home";
import News from "./News";

export default function Pages() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route index element={<Navigation/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/news" element={<News/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}
