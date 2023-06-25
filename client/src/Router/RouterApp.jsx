import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import Index from "../pages/Index";
import AiAssist from "../pages//MainComponents/AiAssisst";
import Dashboard from "../pages/Dashboard/Dashboard";


const RouterApp = () => {
    return (

      <Routes>

            {/* Home */}
            <Route path="/" element={<Navigate to='/index' />} />

            {/* Home */}
            <Route path="/index" element={<Index />} />

            {/* Dashboard */}
            <Route path="/home" element={<Dashboard />} />

            {/* Componets */}
            <Route path="/assist" element={<AiAssist />} />


      
      </Routes>

    );
  };
  
  export default RouterApp;