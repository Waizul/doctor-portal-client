import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctor from './../../../images/doctor.png';
import bg from './../../../images/appointment-bg.png';
const AppointmentBanner = () => {
	const appointmentBanner = {
		background: `url(${bg})`,
		backgroundColor: 'rgba(45,58,74,0.9)',
		backgroundBlendMode: 'darken, luminosity',
		marginTop: 175,
	};
	return (
		<div>
			<Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6} md={6}>
						<img
							style={{ width: 400, marginTop: '-110px' }}
							src={doctor}
							alt=''
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							textAlign: 'left',
						}}
					>
						<Box>
							<Typography
								variant='h6'
								sx={{ mb: 5 }}
								style={{ color: '#5CE7ED' }}
							>
								Appointment
							</Typography>
							<Typography variant='h4' style={{ color: 'white' }}>
								Make an Appointment Today{' '}
							</Typography>
							<Typography
								variant='h6'
								sx={{ my: 5 }}
								style={{
									color: 'white',
									fontSize: 14,
									fontWeight: 300,
								}}
							>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Explicabo molestias, ab cumque
								culpa error voluptates iure beatae maiores alias
								architecto?
							</Typography>
							<Button
								variant='contained'
								style={{ backgroundColor: '#5CE7ED' }}
							>
								Learn more
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default AppointmentBanner;
