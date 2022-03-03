import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Error from "./components/Error";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      {/* <BrowserRouter basename="/Tourism-website/build"> */}
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
