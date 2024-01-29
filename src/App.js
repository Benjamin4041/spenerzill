import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Animatedroutes from "./components/animatedroutes/animatedroutes";
import Navbarcontext from "./components/contexts/navbarcontext";

function App() {
  return (
    <div className="App">
      <Navbarcontext>
        <Router>
          <Animatedroutes />
        </Router>
      </Navbarcontext>
    </div>
  );
}

export default App;
