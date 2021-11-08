import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import chair from './../../../images/chair.png';
import bg from '../../../images/bg.png';
import { useHistory } from 'react-router';
const Banner = () => {
	const history = useHistory();
	const bannerBg = {
		backgroundImage: `url(${bg})`,
	};
	const verticalCenter = {
		display: 'flex',
		alignItems: 'center',
		height: 400,
	};

	const handleGetAppointment = () => {
		history.push('/appointment');
	};
	return (
		<Container style={bannerBg} sx={{ flexGrow: 1, mb: 4 }}>
			<Grid container spacing={2}>
				<Grid
					item
					xs={12}
					md={6}
					style={{ ...verticalCenter, textAlign: 'left' }}
				>
					<Box>
						<Typography variant='h4'>
							Your new smile <br />
							start here
						</Typography>
						<Typography
							variant='h6'
							sx={{
								my: 3,
								fontSize: 14,
								fontWeight: 300,
								color: 'gray',
							}}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Odio eius quisquam sit mollitia hic aut harum.
							Aliquid qui quo facilis!
						</Typography>
						<Button
							sx={{ backgroundColor: '#5CE7ED' }}
							variant='contained'
							onClick={handleGetAppointment}
						>
							Get Appointment
						</Button>
					</Box>
				</Grid>
				<Grid item xs={12} md={6} style={verticalCenter}>
					<img style={{ width: 350 }} src={chair} alt='' />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Banner;
