import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Travel from "./components/Travel";
import Error from "./components/Error";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/travel" component={Travel} />
                <Route path="/about" component={About} />
                <Route component={Error} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
