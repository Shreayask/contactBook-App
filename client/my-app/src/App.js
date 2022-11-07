
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Addcontact from './components/Addcontact';
import Edit from './components/Edit';
import ViewDetails from './components/ViewDetails';
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Addcontact />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/view/:id" element={<ViewDetails />} />
        </Routes>

      </BrowserRouter>



    </div>
  );
}

export default App;
