import {Component} from "react";
import {useEffect, useState} from "react"
import axios from 'axios';
import {Link, withRouter} from "react-router-dom"

class Register extends Component  {
	constructor(props) {

		super(props);
		this.state = {
			first_name : '',
			last_name  : '',
			mobile_no  : '',
			email      : '',
			password   : '',
			dob        : '',
			is_us_citizen : 0,
			social_security_no   : '',
			error_msg_first_name : '',
			error_msg_last_name  : '',
			error_msg_mobile_no  : '',
			error_msg_email  : '',
			error_msg_password : '',
			error_msg_dob : '',
			error_msg_social_security_no : '',
			obj_error : {}
		}
		console.log(this.state.obj_error);
	}
	
	verifyFirstName = (event) => {
		event.preventDefault();
		this.setState({
			first_name : event.target.value
		});
	}
	
	verifyLastName = (event) => {
		event.preventDefault();
		this.setState({
			last_name : event.target.value
		});
	}
	
	verifyMobileNo = (event) => {
		event.preventDefault();
		this.setState({
			mobile_no : event.target.value
		});
	}
	
	verifyEmail = (event) => {
		event.preventDefault();
		this.setState({
			email : event.target.value
		})
	}

	verifyPassword = (event) => {
		event.preventDefault();
		this.setState({
			password : event.target.value
		});
	}

	verifyDob = (event) => {
		event.preventDefault();
		this.setState({
			dob : event.target.value
		});
	}

	verifySocialSecurityNo = (event) => {
		event.preventDefault();
		this.setState({
			social_security_no : event.target.value
		});
	}
	verifyIsUsCitizen = (event) => {
		var checkValue = 0;
		event.preventDefault();
		if(event.target.value === 'on') {	
			checkValue = 1;
		} else {			
			checkValue = 0;
		}

		this.setState({
			is_us_citizen : checkValue
		})
	}

	validation = (event) => {
		event.preventDefault();
		var regex 	  = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var firstName = this.state.first_name;
		var lastName  = this.state.last_name;
		var mobileNo  = this.state.mobile_no;
		var email     = this.state.email;
		var password  = this.state.password;
		var dob       = this.state.dob;
		var socialSecurityNo = this.state.social_security_no;
		var isUsCitizen = this.state.is_us_citizen;

		if(firstName === '' || firstName === 'undefined') {
			this.setState({
				error_msg_first_name : "Please enter the first name"
			});
		} else {
 			this.setState({
				error_msg_first_name : ""
			}); 
		}

		if(lastName === '' || lastName === 'undefined') {
			this.setState({
				error_msg_last_name : "Please enter the last name"
			});
		} else {
			this.setState({
				error_msg_last_name : ""
			}); 
		}

		if(mobileNo === '' || mobileNo === 'undefined') {
			this.setState({
				error_msg_mobile_no : "Please enter the mobile no"
			});

		} else {
			this.setState({
				error_msg_mobile_no : ""
			}); 
		}

		if(email === '' || email === 'undefined') {
			this.setState({
				error_msg_email : "Please enter the email id"
			}); 
		} else {

			if(!regex.test(email)) {
			  	this.setState({
			  		error_msg_email : "Invalid Email Id"
			  	});
			} else {
			  
				this.setState({
					error_msg_email : ""
				});
			}
		}

		if(password === '' || password === 'undefined') {
			this.setState({
				error_msg_password : "Please enter the password"
			});
		} else {
			this.setState({
				error_msg_password : ""
			}); 
		}

		if(dob === '' || dob === 'undefined') {
			this.setState({
				error_msg_dob : "Please enter the dob"
			});
		} else {
			this.setState({
				error_msg_dob : ""
			}); 
		}

		if(socialSecurityNo === '' || socialSecurityNo === 'undefined') {
			this.setState({
				error_msg_social_security_no : "Please enter social security no"
			});
		} else {
			this.setState({
				error_msg_social_security_no : ""
			}); 
		} 

		if(password !== '' && email !== '' &&  firstName !== '' && lastName !== '' && mobileNo !== '' && dob !== '' && socialSecurityNo !== '') {
			axios({
				url : process.env.REACT_APP_BASE_URL+'register', 
				method : "post", 
				data:{'password':password, 'email': email, 'first_name' : firstName, 'last_name' : lastName, 'dob' : dob, 'social_security_no': socialSecurityNo, 'is_us_citizen' : isUsCitizen, 'mobile_no' : mobileNo }}
			).then((response) => {
				console.log("in res",response.data.data);
				
				
				
				alert(response.data.message);
				// this.props.history.push('/home');
				console.log(this.props);
			}).catch((error) => {
					
				if(error.response.data.errors !== 'undefined') {
					this.setState({
						obj_error : error.response.data.errors
					});
				} else {
					this.setState({
						obj_error : {}
					});
				}
				console.log("in cathc", this.state.obj_error);

			});
		} 
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
							<form className="mt-5">	
								<div className="form-head">
									<h2 className="sub_head">Create Account</h2>
								</div>
								<div className="form-group">
									<label htmlFor="first_name">Frist Name</label>
									<input type="text" className="form-control" name="first_name" onChange ={this.verifyFirstName}/>
									<label>{this.state.error_msg_first_name}</label>
								</div>

								<div className="form-group">
									<label htmlFor="last_name">Last Name</label>
									<input type="text" className="form-control" name="last_name" onChange ={this.verifyLastName}/>
									<label>{this.state.error_msg_last_name}</label>
								</div>

								<div className="form-group">
									<label htmlFor="mobile_no">Mobile No</label>
									<input type="text" className="form-control" name="mobile_no" onChange ={this.verifyMobileNo}/>
									<label>{this.state.error_msg_mobile_no}</label>
								</div>
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input type="email" className="form-control" name="email" onChange ={this.verifyEmail}/>
									<label>{this.state.error_msg_email}</label>
								</div>
								<div className="form-group password-icon">
									<label htmlFor="password">Password</label>
									<input type="password" className="form-control" name="password" onChange={this.verifyPassword}/>
									<label>{this.state.error_msg_password}</label>
								</div>

								<div className="form-group">
									<label htmlFor="dob">DOB</label>
									<input type="text" className="form-control" name="dob" onChange={this.verifyDob}/>
									<label>{this.state.error_msg_dob}</label>
								</div>

								<div className="form-group">
									<label htmlFor="social_security_no">Social Security No</label>
									<input type="text" className="form-control" name="social_security_no" onChange={this.verifySocialSecurityNo}/>
									<label>{this.state.error_msg_social_security_no}</label>
								</div>

								<div className="form-group">
									<input type="checkbox" className="mr-1" name="is_us_citizen" onChange={this.verifyIsUsCitizen}  id="is_us_citizen"/>
									<label htmlFor="is_us_citizen">Is US Citizen</label>
									<label>{this.state.error_password_msg}</label>
								</div>
								
								<div className="text-center">
									<button className="btn btn-primary btn-custom" type="submit" onClick={this.validation}>Login</button>
								</div>
								<div className="link_wrap">
									<ul>
										

										
											
									</ul>
								</div>
							</form>
						</div>
					</div>
				</div>
			</>
		)
	}
}
export default Register;