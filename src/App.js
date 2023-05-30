import "./App.css";
import { BrowserRouter as Router,} from "react-router-dom";

import Animatedroutes from "./components/animatedroutes/animatedroutes";
function App() {
  return (
    <div className="App">
      <Router>
        <Animatedroutes/>
      </Router>
    </div>
  );
}

export default App;
