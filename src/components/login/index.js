import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Grid from '@material-ui/core/Grid';
 
class Login extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }
 
    handleChange = (event) => {
        const data  = this.state;
        data[event.target.name] = event.target.value;
        this.setState({ data });
    }
 
    handleSubmit = () => {
        // your submit logic
    }
 
    render() {
        const { email, password } = this.state;

        return (
            <Card variant="outlined">
                <h1 style={{fontFamily: "Comic Sans, cursive"}}>Instagram</h1>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <CardContent>
                        <div><TextValidator
                            label="Email"
                            onChange={this.handleChange}
                            name="email"
                            value={email}
                            validators={['required', 'isEmail']}
                            errorMessages={['This field is required', 'E-mail is not valid']}
                        /></div>
                        <TextValidator
                            label="Password"
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            value={password}
                            validators={['minStringLength:8', 'maxStringLength:12', 'required']}
                            errorMessages={['Must be at least 8 numbers', 'Must be at max 12 numbers' ,'This field is required']}
                        />
                    </CardContent>
                    <CardActions>
                        <Button color="primary" variant="contained" type="submit">Login</Button>
                    </CardActions>
                </ValidatorForm>
            </Card>
        );
    }
}

export default Login;