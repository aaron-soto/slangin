import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { MainNav } from "../components/MainNav/MainNav";

export const PageBase = ({ children }) => {
	return (
		<>
			<Header />
			<MainNav />
			{children}
			<Footer />
		</>
	);
};
