import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Route exact to="/">
        <HomePage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
