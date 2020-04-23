import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Search from './Search';


function Header() {
  return (
    <AppBar>
      <Container fixed>
        <Toolbar>
          <Typography variant="h6">
            COVID DASHBOARD
          </Typography>

          <Search />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;