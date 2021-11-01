import {Link, withRouter} from "react-router-dom"
import {useEffect, useState} from 'react'

function Home(props) {
	

	var [login, setLogin] = useState(false);
	useEffect(() => {
	    if(localStorage.getItem('userAccessToken')) {
	        setLogin(true);
	        
	    } else {
	        setLogin(false);
	    }

	},[]);
	
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
								<h2 className="sub_head">Welcome to</h2>
								<h2 className="bold_head">MedPenny</h2>
							</div>
							{!login && <Link to="/login">Login</Link>} OR {!login &&<Link to="/register">Register</Link>}
						</form>
					</div>
				</div>
			</div>
		</>	
	)
}
export default Home;