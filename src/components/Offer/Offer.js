import { Link } from "react-router-dom";
import "./Offer.scss";
import { OfferItem } from "./OfferItem";

export const Offer = () => {
	return (
		<div className='offer'>
			<div className='container'>
				<h2 className='section-header'>What We Offer</h2>
				<div className='offers'>
					<div className='row'>
						<OfferItem title='Car Audio' />
						<OfferItem title='Car Security' />
					</div>
					<div className='row'>
						<OfferItem title='Home Audio' />
						<OfferItem title='Home Video' />
					</div>
					<div className='row'>
						<OfferItem title='Window Tint' url='tint' />
						<OfferItem title='Home Security' />
					</div>
				</div>
			</div>
		</div>
	);
};
