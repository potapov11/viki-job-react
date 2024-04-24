import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <div className="main-page">
        <div className="container">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
