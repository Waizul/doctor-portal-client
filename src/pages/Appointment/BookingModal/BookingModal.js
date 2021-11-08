import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hook/useAuth';
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	background: 'white',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};
const BookingModal = ({
	open,
	handleClose,
	booking,
	date,
	setBookingSuccess,
}) => {
	const { name, time } = booking;

	const { user } = useAuth();
	const initialInfo = {
		patientName: user.displayName,
		email: user.email,
		phone: '',
		address: '',
	};
	const [bookingInfo, setBookingInfo] = useState(initialInfo);

	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newBookingInfo = { ...bookingInfo };
		newBookingInfo[field] = value;
		setBookingInfo(newBookingInfo);
	};
	const handleBookingForm = (e) => {
		const appointment = {
			...bookingInfo,
			serviceName: name,
			time: time,
			date: date.toLocaleDateString(),
		};

		fetch('http://localhost:5000/appointments', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(appointment),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					setBookingSuccess(true);
				}
			});
		handleClose();
		e.preventDefault();
	};
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography>{name}</Typography>
					<form onSubmit={handleBookingForm}>
						<TextField
							sx={{ width: '90%', m: 1 }}
							disabled
							id='outlined-size-small'
							defaultValue={time}
						/>
						<TextField
							sx={{ width: '90%', m: 1 }}
							id='outlined-size-small'
							disabled
							defaultValue={date.toDateString()}
						/>

						<TextField
							sx={{ width: '90%', m: 1 }}
							name='patientName'
							onBlur={handleOnBlur}
							type='text'
							id='outlined-size-small'
							defaultValue={user.displayName}
							size='small'
						/>
						<TextField
							sx={{ width: '90%', m: 1 }}
							name='email'
							onBlur={handleOnBlur}
							type='email'
							id='outlined-size-small'
							defaultValue={user.email}
						/>

						<TextField
							sx={{ width: '90%', m: 1 }}
							id='outlined-size-small'
							name='phone'
							type='number'
							placeholder='phone'
							onBlur={handleOnBlur}
						/>
						<TextField
							sx={{ width: '90%', m: 1 }}
							name='address'
							type='text'
							id='outlined-size-small'
							placeholder='address'
							onBlur={handleOnBlur}
						/>
						<Button type='submit' variant='contained'>
							Submit
						</Button>
					</form>
				</Box>
			</Modal>
		</div>
	);
};

export default BookingModal;
