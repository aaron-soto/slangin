import "./Footer.scss";
import { Link } from "react-router-dom";
import { socials, contacts } from "../../assets/Constants";

export const Footer = () => {
	return (
		<>
			<div className='footer'>
				<div className='container'>
					<div className='left'>
						<div className='contact'>
							<h4>Contact Us</h4>
							<p>
								<a href={`tel:${contacts.phone}`}>{`tel:${contacts.phone}`}</a>
							</p>
							<p>
								<a href={contacts.maps}>{contacts.address}</a>
							</p>
							<p>
								<a href={`mailto:${contacts.email}`}>{contacts.email}</a>
							</p>
						</div>
					</div>

					<div className='right'>
						<ul>
							<h4>Links</h4>
							<li>
								<Link to='/about/'>About</Link>
							</li>
							<li>
								<Link to='/audio/'>Audio</Link>
							</li>
							<li>
								<Link to='/tint/'>Tint</Link>
							</li>
							<li>
								<Link to='/audio/#car-audio'>Car Audio</Link>
							</li>
							<li>
								<Link to='/audio/#home-audio'>Home Audio</Link>
							</li>
						</ul>

						<div className='newsletter'>
							<h4>Newsletter</h4>
							<input type='text' placeholder='Email' />
							<button>Sign up</button>
						</div>
					</div>
				</div>
			</div>
			<div className='bottom-banner'>
				<div className='container'>
					<p>© Copyright 2020. All Rights Reserved.</p>
					<ul>
						<li>
							<Link to='/return-policy'>Return Policy</Link>
						</li>
						<li>Faqs</li>
						<li>Terms & conditions</li>
					</ul>
				</div>
			</div>
		</>
	);
};
