import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Error from "./components/Error";
import Footer from "./components/Footer";

function App() {
    return (
        <>

            <BrowserRouter basename="/Tourism-website/build">
            <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route path="/travel" component={Travel} /> */}
                    <Route path="/about" component={About} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
