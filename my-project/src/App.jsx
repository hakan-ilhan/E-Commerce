import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import Footer from "./layout/Footer";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./layout/Navbar";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import Sign from "./components/Form";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import LoginForm from "./components/LoginForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tokenCheck } from "./store/actions/userAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(tokenCheck(token));
    }
  }, []);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <ProductListPage />
        </Route>
        <Route exact path="/products">
          <ProductPage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/team">
          <TeamPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/signup">
          <Sign />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
