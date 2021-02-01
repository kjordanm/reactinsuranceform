import React from 'react';
import StepOne from './Register/StepOne/StepOne';
import StepTwo from './Register/StepTwo/StepTwo';
import InfoLeft from './Shared/InfoLeft';
import { Container, Row } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
       <Container fluid>
        <Row>
          <InfoLeft></InfoLeft>
          <Switch>
          <Route path="/register">
              <StepTwo/>
            </Route>
            <Route path="/">
              <StepOne/>
            </Route>
            
          </Switch>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
