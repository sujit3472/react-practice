import {Link, withRouter} from "react-router-dom"
import {useEffect, useState} from 'react'
import axios from 'axios';

function Dashboard(props) {
	var [login, setLogin] = useState(false);
	useEffect(() => {
	    if(localStorage.getItem('userAccessToken')) {
	        setLogin(true);
	        
	    } else {
	        setLogin(false);
	        props.history.push('/');
	    }

	},[]);

	let logout = (event) => {
		event.preventDefault();
		
		if(localStorage.getItem('userAccessToken')) {
			axios({
			   	url : process.env.REACT_APP_BASE_URL+'customer-logout', 
			   	method : "post", 
			   	headers:{
			   		Authorization  : 'Bearer '+localStorage.getItem('userAccessToken'),
			   		'Content-Type' : 'application/json'
			   	}
			}).then((response) => {
			   	setLogin(false);
			   	localStorage.clear();
			   	alert(response.data.message);
			   	props.history.push('/');
			}).catch((error) => {
				alert('Opps something went wrong!');
				props.history.push('/');
			});
		}
	}
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
						<form>
							<div className="form-head">
								<h2 className="sub_head">Welcome Customer</h2>
								<h2 className="bold_head"></h2>
							</div>		
							<div className="form-group">
								<Link to="my-profile">My Profile</Link> <br/>
								<button onClick={logout}>Logout</button>
								
							</div>	
						</form>	
					
					</div>
				</div>
			</div>

		</>
	);
}

Dashboard = withRouter(Dashboard)
export default Dashboard