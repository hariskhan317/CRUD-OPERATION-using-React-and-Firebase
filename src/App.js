import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import { Login } from "./pages/login";
import Navbar from "./component/navbar";
import {CreatePost} from './component/createPost'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/createPost" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
