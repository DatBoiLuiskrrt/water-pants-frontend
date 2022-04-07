import "./App.css";
import { Routes, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SignUpForm from "./components/SignUpForm";
function App() {
  return (
    <div className="background">
      <Header />
      <div className="registerContainer">
        <Switch>
          <Routes>
            <Route path="/">
              <Hero />
            </Route>
            <Route path="/">
              <SignUpForm />
            </Route>
          </Routes>
        </Switch>
      </div>
    </div>
  );
}

export default App;
