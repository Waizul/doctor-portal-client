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
import { Link, useHistory } from 'react-router-dom';
import login from '../../images/login.png';
import useAuth from '../../hook/useAuth';
const Register = () => {
	const [registerData, setRegisterData] = useState({});
	const { user, registerUser, signInUsingGoogle, loading, authError } =
		useAuth();
	console.log(registerData);
	const history = useHistory();
	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newRegisterData = { ...registerData };
		newRegisterData[field] = value;
		setRegisterData(newRegisterData);
	};
	const handleLoginSubmit = (e) => {
		if (registerData.password !== registerData.password2) {
			alert('password didnt matched');
			return;
		}
		registerUser(
			registerData.email,
			registerData.password,
			registerData.name,
			history,
		);
		e.preventDefault();
	};
	const handleGoogleSignIn = () => {
		signInUsingGoogle(history);
	};
	return (
		<Container>
			<Grid container spacing={2}>
				<Grid sx={{ mt: 10 }} item xs={12} md={6}>
					<Typography variant='body1'>Register</Typography>
					{!loading && (
						<form onSubmit={handleLoginSubmit}>
							<TextField
								sx={{ width: 300, m: 1 }}
								id='standard'
								label='your name'
								type='text'
								name='name'
								variant='standard'
								onBlur={handleOnBlur}
							></TextField>
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
							<TextField
								sx={{ width: 300, m: 1 }}
								id='standard'
								label='retype your password'
								name='password2'
								type='password'
								variant='standard'
								onBlur={handleOnBlur}
							></TextField>
							<Button
								sx={{ width: 300, m: 1 }}
								variant='contained'
								type='submit'
							>
								Register
							</Button>
							<Link
								style={{ textDecoration: 'none' }}
								to='/login'
							>
								{' '}
								<Button color='inherit'>Registered</Button>
							</Link>
							{loading && <CircularProgress />}
							{user?.email && (
								<Alert severity='success'>
									registration successful
								</Alert>
							)}
							{authError && (
								<Alert severity='error'>{authError}</Alert>
							)}
						</form>
					)}
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
	);
};

export default Register;
