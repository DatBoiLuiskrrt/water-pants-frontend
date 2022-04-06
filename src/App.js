import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SignUpForm from "./components/SignUpForm";
function App() {
  return (
    <div className="background">
      <Header />
      <div className="registerContainer">
        <Hero />
        <SignUpForm />
      </div>
    </div>
  );
}

export default App;
