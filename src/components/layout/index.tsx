import { NextPage } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Layout: NextPage = ({ children }) => {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
			<Footer></Footer>
		</div>
	);
};

export default Layout;
