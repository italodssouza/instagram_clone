import React, {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    login = () => {
        (this.state.email === "italodssouza@gmail.com" && this.state.password === "1234") ? alert('Hell yes'): alert('Kinda not');
    }

    changeEmail = (e) => {
        let emailValue = e.target.value;
        this.setState({email: emailValue})
    }

    changePassword = (e) => {
        let passwordValue = e.target.value;
        this.setState({password: passwordValue})
    }

    render(){
        return(
            <div>
                <input type="email" name="email" id="email" onChange={this.changeEmail} value={this.state.email}/>
                <input type="password" name="password"  onChange={this.changePassword} value={this.state.password}/>
                <button onClick={this.login}>Entrar</button>
            </div>
        );
    }
}

export default Login;