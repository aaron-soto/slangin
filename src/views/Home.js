import { HeroSection } from "../components/HeroSection/HeroSection";
import { Offer } from "../components/Offer/Offer";
import { OurCustomers } from "../components/OurCustomers/OurCustomers";
import { OurWork } from "../components/OurWork/OurWork";

export const Home = () => {
	return (
		<>
			<HeroSection />
			<Offer />
			<OurWork />
			<OurCustomers />
		</>
	);
};
