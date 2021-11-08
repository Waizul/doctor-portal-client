import {
	Alert,
	Button,
	CircularProgress,
	Container,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import login from '../../images/login.png';

const Login = () => {
	const [loginData, setLoginData] = useState({});
	console.log(loginData);
	const history = useHistory();
	const location = useLocation();
	const { logIn, authError, loading, signInUsingGoogle } = useAuth();
	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	};
	const handleLoginSubmit = (e) => {
		logIn(loginData.email, loginData.password, history, location);
		e.preventDefault();
	};
	const handleGoogleSignIn = () => {
		signInUsingGoogle(history, location);
	};
	return (
		<>
			<Container>
				<Grid container spacing={2}>
					<Grid sx={{ mt: 10 }} item xs={12} md={6}>
						<Typography variant='body1'>Login</Typography>
						<form onSubmit={handleLoginSubmit}>
							<TextField
								sx={{ width: 300, m: 1 }}
								id='standard'
								label='your email'
								type='email'
								name='email'
								variant='standard'
								onBlur={handleOnBlur}
							></TextField>
							<TextField
								sx={{ width: 300, m: 1 }}
								id='standard'
								label='your password'
								name='password'
								type='password'
								variant='standard'
								onBlur={handleOnBlur}
							></TextField>
							<Button
								sx={{ width: 300, m: 1 }}
								variant='contained'
								type='submit'
							>
								Log in
							</Button>
							<Link
								style={{ textDecoration: 'none' }}
								to='/register'
							>
								{' '}
								<Button color='inherit'>
									NEW USER REGISTER
								</Button>
							</Link>
							{loading && <CircularProgress />}
							{authError && (
								<Alert severity='error'>{authError}</Alert>
							)}
						</form>
						<p>--------------------------------</p>
						<Button
							variant='contained'
							sx={{ color: 'white' }}
							onClick={handleGoogleSignIn}
						>
							Sign in with google
						</Button>
					</Grid>
					<Grid item xs={12} md={6}>
						<img src={login} alt='' />
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Login;
