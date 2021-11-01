import {Link, withRouter} from "react-router-dom"
import {useEffect, useState} from 'react'
import axios from 'axios';

function MyProfile(props)
{
	var [isloading, setLoading]    	  = useState(true);
	var [userDetails, setUserDetails] = useState([]);
	var [userAddressDetails, setUserAddressDetails] = useState([]);
	useEffect(() => {
		if(localStorage.getItem('userAccessToken')) {
			axios({
			   	url : process.env.REACT_APP_BASE_URL+'get-profile', 
			   	method : "get", 
			   	headers:{
			   		Authorization  : 'Bearer '+localStorage.getItem('userAccessToken'),
			   		'Content-Type' : 'application/json'
			   	}
			}).then((response) => {
			   	setUserDetails(response.data.data.basicDetails);
			   	setUserAddressDetails(response.data.data.addressDetails);
			   	setLoading(false);
			}).catch((error) => {
				setLoading(false);
				setUserDetails([]);
				setUserAddressDetails([]);
				alert('Opps something went wrong!');
				props.history.push('/');
			});
		}
	},[]);

	var isDataAvailble = Object.keys(userDetails).length > 0  ? true : false;
	
	return(
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
								{isloading && <h1 className="text-center m-5">Loading.....</h1>}
								{!isloading && <h1 className="text-center m-5">Profile Details</h1>}
							</div>
							{isDataAvailble && <div className="row"> 
								<div className="col-md-6">

									<img src={userDetails.profile_pic} alt="profile_pic" height="110" width="110" className="rounded-circle"/>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label htmlFor="name">Name : {userDetails.first_name} {userDetails.last_name}</label>
									</div>
									<div className="form-group">
										<label htmlFor="dob">DOB : {userDetails.dob} </label>
									</div>
									<div className="form-group">
										<label htmlFor="email">Email : {userDetails.email} </label>
									</div>

									<div className="form-group">
										<label htmlFor="mobile_no">Mobile No : {userDetails.mobile_no} </label>
									</div>
									<div className="form-group">
										<label htmlFor="medpenny_id">Medpenny Id : {userDetails.medpenny_id} </label>
									</div>

									<div className="form-group">
										<label htmlFor="wallet_balance">Wallet Balance : {userDetails.wallet_balance} </label>
									</div>

									<div className="form-group">
										<label htmlFor="address">Address : {userAddressDetails.address_line_1}, {userAddressDetails.address_line_2}, {userAddressDetails.city}, {userAddressDetails.state}, {userAddressDetails.zip_code}  </label>
									</div>
								</div>
								
							</div>}
							{!isDataAvailble && <div className="form-group text-center">
								<label htmlFor="name">No Data Found</label>
							</div>}
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

MyProfile = withRouter(MyProfile);

export default MyProfile;