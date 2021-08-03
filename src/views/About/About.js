import "./About.scss";

export const About = () => {
	return (
		<>
			<h1 className='section-header'>About Us</h1>

			<div className='container about'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
					consequatur nam reprehenderit rerum fuga placeat voluptatum soluta,
					magni voluptates quisquam ipsa. Similique quaerat culpa nesciunt
					commodi consectetur eaque doloremque? Dolore! rerum fuga placeat
					voluptatum soluta, magni voluptates quisquam ipsa. Similique quaerat
					culpa nesciunt commodi consectetur eaque doloremque? Dolore!
				</p>
				<p>Just read some of our reviews and find out for yourself!</p>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13319.35355039564!2d-111.70224436614892!3d33.42745754248655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872bafedcd484ae3%3A0xe9a11a1abced88f6!2sSlangin%20Sound%20and%20Tint!5e0!3m2!1sen!2sus!4v1627958983864!5m2!1sen!2sus'
					width='600'
					height='450'
					style={{ border: 0 }}
					allowfullscreen=''
					loading='lazy'
				></iframe>
				<div className='contacts'>
					<p>Phone:</p>
					<a href='tel:(480) 396-9003'>(480) 396-9003</a>

					<p>Address:</p>
					<a href=''>5950 E Brown Rd #9017, Mesa, AZ 85205</a>

					<p>Email:</p>
					<a href='mailto:slanginsound@hotmail.com'>slanginsound@hotmail.com</a>
				</div>
			</div>
		</>
	);
};
