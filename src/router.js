import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Course } from "./course";
import { ShowClasses } from "./index";

export class Router extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<ShowClasses />} />
          <Route path="/courses" element={<Course />} />
        </Routes>
      </BrowserRouter>
    );
  }
}