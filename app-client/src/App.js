import "./css/styles.css";
import Home from "./components/home/home";
import Teamweights from "./components/teamweights/teamweights";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/home" component={Home} />
        <Route path="/teamweights" component={Teamweights} />
      </BrowserRouter>
    </div>
  );
}

export default App;
