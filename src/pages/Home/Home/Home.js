import React from 'react';
import AppointmentBanner from './AppointmentBanner';
import Banner from './Banner';
import Contact from './Contact';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Contact />
			<Services></Services>
			<Services></Services>
			<AppointmentBanner></AppointmentBanner>

			<Testimonial></Testimonial>
		</div>
	);
};

export default Home;
