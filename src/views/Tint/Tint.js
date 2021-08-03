import "./Tint.scss";
import TintCar from "../../assets/img/dark-car.jpg";

export const Tint = () => {
	return (
		<div className='tint container'>
			<h1 className='section-header'>Window Tint</h1>
			<p>
				Protect your interior and yourself from the Az Heat with the best window
				tint around.
			</p>

			<img src={TintCar} alt='tinted car' />

			<p>Call for a quote!</p>
		</div>
	);
};
