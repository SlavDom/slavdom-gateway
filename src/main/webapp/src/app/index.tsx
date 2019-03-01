import React, {Component} from 'react';
import './index.css';
import AppRouter from './router';
import Container from "reactstrap/lib/Container";
import {BrowserRouter as Router} from "react-router-dom";
import NavMenu from "./components/NavMenu";

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    render() {
        return (
            <Container>
                <Router>
                    <div>
                        <NavMenu />
                        <AppRouter/>
                    </div>
                </Router>
            </Container>
        );
    }
}

export default App;
