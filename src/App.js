import React from "react";
import './App.css'
import Page2 from "./Components/Page2";
import Page1 from './Components/Page1/index'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import NavBar from "./Components/Page1/Header/Navbar";

const App = () => {
  return(
    <>
      <Router>
        <NavBar contents={[
          {linkText: 'Home', url: '/'},
          {linkText: 'About', url: '/'},
          {linkText: 'Stories', url: '/startup/src/Components/Page2/index.js'},
        ]} />
        <Routes >
          <Route path="/" element={<Page2 />} />
          <Route path="/startup/src/Components/Page2/index.js" element={<Page1 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
