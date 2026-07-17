import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes and Route

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Algorithm from "./pages/Algorithm";
// import other pages...

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> {/* Use Routes for defining routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/algorithm" element={<Algorithm />} />
        
          {/* Define other routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
