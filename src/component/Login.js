import {Component} from "react";
import axios from 'axios';
import {Link, withRouter} from "react-router-dom"
class Login extends Component {

	constructor (props) {
		super(props);
		this.state = {		
			email: '',
			password: '',
			error_msg: '',
			error_password_msg : '',
			server_error : ''
		}
	}
	
	validation = (event) => {
		event.preventDefault();
		
		var regex 	   = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var checkEmail = this.state.email;
		var password   = this.state.password;
		if(password === '' || password === 'undefined') {
			this.setState({
		  		error_password_msg : "Please Enter the Password"
		  	});
		} else {
			this.setState({
		  		error_password_msg : ""
		  	});
		}
		//validation for email
		if(checkEmail === '' || checkEmail === 'undefined')
		{
			this.setState({
		  		error_msg : "Please Enter the email Id"
		  	});
		} else {
			if(!regex.test(checkEmail)) {
			  	this.setState({
			  		error_msg : "Invalid Email Id"
			  	});
			} else{
			  
				this.setState({
					error_msg : ""
				});
			}
		}
		if(password !== '' && checkEmail !== '') {
			axios({
				url : process.env.REACT_APP_BASE_URL+'customer-login', 
				method : "post", 
				data:{'password':password, 'email': checkEmail, 'device_type' : '1', 'device_token': '1234'}}
			).then((response) => {
				
				localStorage.setItem('userAccessToken', response.data.data.loginDetails.accessToken);
				localStorage.setItem('userRefreshToken', response.data.data.loginDetails.refresh_token);
				
				alert(response.data.message);
				this.props.history.push('/dashboard');
			}).catch((error) => {
				alert(error.response.data.message);
			});
		} 
	}
	verifyEmail = (event) => {
		event.preventDefault();
		this.setState({
			email : event.target.value
		});
	}
	
	verifyPassword = (event) => {
		event.preventDefault();
		this.setState({
			password : event.target.value
		});
	}

	render () {
		return (
			<>
				<div className="col-lg-7 col-md-12 col-12">
					<div className="inner_col_wrap login_btn_bg">
				        <Link to="/"><img src="../images/Logo.png" alt="medpenny"/></Link>
				    </div>
				</div>
				<div className="col-lg-5 col-md-12 col-12">
					<div className="inner_col_wrap">
						<div>
							<form >	
								<div className="form-head">
									<h2 className="sub_head">Welcome to</h2>
									<h2 className="bold_head">MedPenny</h2>
									<small> Don't have account <Link to="/register">Sign Up</Link></small>
								</div>
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input type="email" className="form-control" name="email" onChange ={this.verifyEmail}/>
									<label>{this.state.error_msg}</label>
									<label>{this.state.server_error}</label>
								</div>
								<div className="form-group password-icon">
									<label htmlFor="password">Password</label>
									<input type="password" className="form-control" name="password" onChange={this.verifyPassword}/>
									<i className="fas fa-eye-slash" id="togglePassword"></i>
									<label>{this.state.error_password_msg}</label>
								</div>
								<div className="text-center">
									<button className="btn btn-primary btn-custom" type="submit" onClick={this.validation}>Login</button>
								</div>
								<div className="link_wrap">
								</div>
							</form>
						</div>
					</div>
				</div>
			</>
		)
	}
}

Login = withRouter(Login)
export default Login;