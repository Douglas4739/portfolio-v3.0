import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import WorkExperience from "./pages/WorkExperience";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router >
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work-experience" component={WorkExperience} />
          <Route path="/projects" component={Projects} />
        </Routes>
        <Home />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
