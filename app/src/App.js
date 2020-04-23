import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from './components/Header';
import Home from './pages/Home';
import Country from './pages/Country';

function App() {
  return (
    <div className="App">
      <Header/>

      <Box pt={8}>
        <Container fixed>
          <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route path="/country/:slug">
                  <Country />
                </Route>
              </Switch>
          </BrowserRouter>
        </Container>
      </Box>
    </div>
  );
}

export default App;
