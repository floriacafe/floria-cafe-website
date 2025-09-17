import Background from "./layoutpages/Background";
import Wrapper from "./layoutpages/wrapper";
import Contact from "./pages/Contact";
import Homepage from "./pages/homepage";
import Location from "./pages/Locationpage";
import Menu from "./pages/Menu";
import Loadingscreen from "./layoutpages/Loadingscreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Loadingscreen />
      <Background />
      <Router>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location />} />
            <Route path="*" element={<Homepage />} />
          </Routes>
        </Wrapper>
      </Router>
    </>
  )
}

export default App
