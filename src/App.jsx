// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import TestPart from "./Components/Test/TestPart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/test" element={<TestPart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
