import { Container, Grid, Icon, Typography } from '@mui/material';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import AddLocationIcon from '@mui/icons-material/AddLocation';
const Contact = () => {
	return (
		<Container>
			<Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid
					item
					xs={4}
					sm={4}
					md={4}
					sx={{
						display: 'flex',
						justifyContent: 'space-evenly',
						backgroundColor: 'lightgreen',
					}}
				>
					<AccessTimeIcon sx={{ color: '' }} />
					<Typography variant='body1'>
						Opening hour
						<Typography sx={{ fontSize: 14 }} variant='body1'>
							Opening hour
						</Typography>
					</Typography>
				</Grid>
				<Grid
					item
					xs={4}
					sm={4}
					md={4}
					sx={{
						display: 'flex',
						justifyContent: 'space-evenly',
						backgroundColor: 'white',
					}}
				>
					<CallIcon />
					<Typography variant='body1'>
						Contact us
						<Typography sx={{ fontSize: 14 }} variant='body1'>
							+882222222222
						</Typography>
					</Typography>
				</Grid>
				<Grid
					item
					xs={4}
					sm={4}
					md={4}
					sx={{
						display: 'flex',
						justifyContent: 'space-evenly',
						backgroundColor: 'lightgreen',
					}}
				>
					<AddLocationIcon />
					<Typography variant='body1'>
						Visit us
						<Typography sx={{ fontSize: 14 }} variant='body1'>
							Opening hour
						</Typography>
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Contact;
