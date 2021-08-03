import "./Header.scss";
import slanginLogo from "../../assets/img/slangin.svg";

export const Header = () => {
	return (
		<div className='header'>
			<div className='container'>
				<img src={slanginLogo} alt='Slangin Logo' className='logo' />
			</div>
		</div>
	);
};
