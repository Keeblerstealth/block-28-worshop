import { Routes, Route, } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import { Link } from "react-router-dom";

const App = () => {

  return (
    <>
      <div id="container">

        <div id="navbar">
          <Link to={"/"}>Home</Link>
          <Link to={"/blue"}>blue</Link>
          <Link to={"/red"}>red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<h2>Home</h2>} />
            <Route path="/blue" element={<Blue/>} />
            <Route path="/red" element={<Red/>} />
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App
