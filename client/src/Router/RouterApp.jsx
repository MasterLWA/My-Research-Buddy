import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "../pages/Home";

const RouterApp = () => {
    return (

      <Routes>

            {/* Home */}
            <Route path="/" element={<Navigate to='/index' />} />

            {/* Home */}
            <Route path="/index" element={<Home />} />

      
      </Routes>

    );
  };
  
  export default RouterApp;