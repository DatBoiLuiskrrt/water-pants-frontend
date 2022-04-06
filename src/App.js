import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SignUpForm from "./components/SignUpForm";
function App() {
  return (
    <div className="background">
      <Header />
      <Routes>
        <div className="registerContainer">
          <Route path="/" element={<Hero />}></Route>
          <Route path="/" element={<SignUpForm />}></Route>
        </div>
      </Routes>
    </div>
  );
}

export default App;
