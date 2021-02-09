import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';


const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar></Navbar>
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route exact path="/about" component={About}>
                            {/* <About /> */}
                        </Route>

                        <Route exact path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
