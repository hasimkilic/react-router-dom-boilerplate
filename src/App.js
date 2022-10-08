import React, { useEffect, useState } from "react"
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { Routes, Route } from "react-router-dom"
import axios from "axios"
function App() {
  const [data, setData] = useState([]);
  
  const getData = async () => {
    const { data } = await axios.get("http://localhost:3006/contacts");
    setData(JSON.stringify(data))
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div className="App">
      {/* navbar-header */}
        <Header/>
      {/* Routers & Pages*/}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About data={data} />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
