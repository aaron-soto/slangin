import "./MainNav.scss";
import { useState } from "react";
import { socials, contacts } from "../../assets/Constants";
import { Link } from "react-router-dom";
import slanginlogo from "../../assets/img/slangin.svg";

export const MainNav = () => {
	const [mobileNavShown, setMobileNavShown] = useState(false);

	const toggleNav = () => {
		setMobileNavShown(!mobileNavShown);
	};
	const closeNav = () => {
		setMobileNavShown(false);
	};

	return (
		<div className={`main-nav ${mobileNavShown ? "mobileShown" : ""}`}>
			<nav className='container'>
				<img src={slanginlogo} />

				<div className='menu-icon' onClick={toggleNav}>
					<i class='fas fa-bars'></i>
				</div>

				<ul className={`page-links ${mobileNavShown ? "mobileShown" : ""}`}>
					<li onClick={closeNav}>
						<Link to='/'>Home</Link>
					</li>
					<li onClick={closeNav}>
						<Link to='/video/'>Video</Link>
					</li>
					<li onClick={closeNav}>
						<Link to='/audio/'>Audio</Link>
					</li>
					<li onClick={closeNav}>
						<Link to='/tint/'>Tint</Link>
					</li>
					<li onClick={closeNav}>
						<Link to='/about/'>About</Link>
					</li>
				</ul>

				<div className='links'>
					<ul className='social-links'>
						<p>Follow Us:</p>
						<li>
							<a href={socials.facebook}>
								<i class='fab fa-facebook-f'></i>
							</a>
						</li>
						<li>
							<i class='fab fa-twitter'></i>
						</li>
						<li>
							<a href={socials.instagram}>
								<i class='fab fa-instagram'></i>
							</a>
						</li>
					</ul>
					<ul className='contact-links'>
						<p>Contact Us:</p>
						<li>
							<a href={`tel:${contacts.phone}`}>
								<i class='fas fa-phone'></i>
							</a>
						</li>
						<li>
							<a href={contacts.maps}>
								<i class='fas fa-map-marker-alt'></i>
							</a>
						</li>
						<li>
							<a href={`mailto:${contacts.email}`}>
								<i class='fas fa-envelope'></i>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
