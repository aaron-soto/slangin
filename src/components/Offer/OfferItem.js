import { Link } from "react-router-dom";
import "./Offer.scss";

export const OfferItem = ({ title, url }) => {
	return (
		<div className='offer-item column'>
			<Link to={`/${url}`}>
				<h3>{title}</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore
					consectetur pariatur architecto perspiciatis iure.
				</p>
				<button>
					<i class='fas fa-angle-right'></i>
				</button>
			</Link>
		</div>
	);
};
