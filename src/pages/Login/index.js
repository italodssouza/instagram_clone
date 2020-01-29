import React, {Component} from 'react';
import Login from '../../components/login';
import Logo from '../../assets/photo_login.PNG';
import Grid from '@material-ui/core/Grid';

class Logins extends Component {
  render() {
    return (
      <div>
        <Grid container direction="row" justify="center">
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={4}>
            <img alt='logo' src={Logo}/>
          </Grid>
          <Grid item xs={4}>
            <Login/>
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
        
      </div>
    );
  }
}

export default Logins;