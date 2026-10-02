import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./index.css";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <div>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
