import "./OurWork.scss";
import { WorkPreview } from "./WorkPreview";
import slangin1 from "../../assets/img/slangin-1.png";
import slangin2 from "../../assets/img/slangin-2.png";
import slangin3 from "../../assets/img/slangin-3.png";
import slangin4 from "../../assets/img/slangin-4.png";
import slangin5 from "../../assets/img/slangin-5.png";

export const OurWork = () => {
	return (
		<div className='our-work'>
			<div className='container'>
				<h2 className='section-header'>Our Work</h2>
				<div className='works'>
					<img src={slangin2} alt='' className='large' />
					<img src={slangin2} alt='' />
					<img src={slangin3} alt='' />
					<img src={slangin4} alt='' />
					<img src={slangin5} alt='' />
				</div>
			</div>
		</div>
	);
};
