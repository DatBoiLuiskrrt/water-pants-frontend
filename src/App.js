import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SignUpForm from "./components/SignUpForm";
import Login from "./components/Login";
function App() {
  return (
    <div className="background">
      <Header />
      <div className="registerContainer">
        <BrowserRouter>
          <Route exact path="/" element={<Hero />}>
            <Hero />
          </Route>
          <Route exact path="/" component={<SignUpForm />}>
            <SignUpForm />
          </Route>
          <Route path="/login" render={(props) => <Login />}>
            <Login />
          </Route>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
