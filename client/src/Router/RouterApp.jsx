import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import Index from "../pages/Index";
import AiAssist from "../pages//MainComponents/AiAssisst";
import Dashboard from "../pages/Dashboard/Dashboard";
import SignUp from "../pages/UserManagement/SignUp";
import SignIn from "../pages/UserManagement/SignIn";

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

            {/* loging */}
            <Route path="/login" element={<SignIn />}/>

            {/* Sign Up */}
            <Route path="/register" element={<SignUp />}/>

            {/* 404 */}
            <Route path="*" element={<Navigate to='/index' />} />

      
      </Routes>

    );
  };
  
  export default RouterApp;