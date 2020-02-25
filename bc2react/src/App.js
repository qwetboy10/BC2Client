import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import './App.scss'
import Home from "./Home";
import Setup from "./Setup";

class App extends React.Component {
    render() {
        const config = this.props.config;
        return (
            <Router>
                <div class="container-fluid">
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/">BC^2</Navbar.Brand>
                        <Nav.Link href="/">Home</Nav.Link>
                        {config.canViewProblems && <Nav.Link href="/problems">Problems</Nav.Link>}
                        {config.canSubmit && <Nav.Link href="/submit">Submit</Nav.Link>}
                        {config.canViewClarifications && <Nav.Link href="/clarifications">Clarifications</Nav.Link>}
                        <Nav.Link href="/scoreboard">Scoreboard</Nav.Link>
                        {config.canViewSubmissions && <Nav.Link href="/judge">Judge</Nav.Link>}
                        {config.canEditContestSetup && <Nav.Link href="/setup">Contest Setup</Nav.Link>}
                        {config.canEditSettings && <Nav.Link href="/settings">Contest Settings</Nav.Link>}
                        <Nav.Link href="/account">Account</Nav.Link>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link href="/logout">Logout</Nav.Link>
                        </Navbar.Collapse>
                    </Navbar>
                    <Switch>
                        <Route path="/setup">
                            <Setup/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;
