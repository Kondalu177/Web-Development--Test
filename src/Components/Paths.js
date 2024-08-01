import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function Paths() {
  return (
    <div>
      {/* Routeing paths Website */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Paths;
