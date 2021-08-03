import "./OurWork.scss";

export const WorkPreview = ({ src, large }) => {
	return <img src={src} alt='' className={large ? "large" : ""} />;
};
