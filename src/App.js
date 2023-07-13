import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Lessons from "./components/Lessons";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Expressions from "./components/lessons/Expressions";
import Grammar from "./components/lessons/Grammar";
import Letters from "./components/lessons/Letters";
import Numbers from "./components/lessons/Numbers";
import Vocabulary from "./components/lessons/Vocabulary";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main >
          <div className="main-background"></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Routes>
            <Route path="/lessons/vocabulary" element={<Vocabulary />} />
            <Route path="/lessons/grammar" element={<Grammar />} />
            <Route path="/lessons/letters" element={<Letters />} />
            <Route path="/lessons/numbers" element={<Numbers />} />
            <Route path="/lessons/expressions" element={<Expressions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
