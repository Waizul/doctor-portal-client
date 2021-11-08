import {
	Alert,
	Button,
	Container,
	Grid,
	Paper,
	Typography,
} from '@mui/material';

import React, { useState } from 'react';
import BookingModal from '../Appointment/BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
	const { name, time, space } = booking;
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [bookingSuccess, setBookingSuccess] = useState(false);
	return (
		<>
			<Grid item xs={12} sm={6} md={4}>
				<Container>
					{bookingSuccess && (
						<Alert severity='success'>you have done</Alert>
					)}
					<Paper
						sx={{ py: 5, textAlign: 'center' }}
						variant='outlined'
					>
						<Typography sx={{ color: 'info.main' }} variant='h5'>
							{' '}
							{name}
						</Typography>
						<Typography variant='h6'>{time}</Typography>
						<Typography sx={{ fontSize: '14px' }} variant='h5'>
							spaces available
							{space}
						</Typography>

						<Button onClick={handleOpen} variant='contained'>
							Book Appointment
						</Button>
					</Paper>{' '}
				</Container>
			</Grid>
			<BookingModal
				open={open}
				booking={booking}
				date={date}
				handleClose={handleClose}
				setBookingSuccess={setBookingSuccess}
			></BookingModal>
		</>
	);
};

export default Booking;
