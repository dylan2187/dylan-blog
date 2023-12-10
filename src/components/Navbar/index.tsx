import { NextPage } from 'next';
import styles from './index.module.scss';
import { navs } from './config';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Navbar: NextPage = () => {
	const { pathname, push } = useRouter(); //使用这个hook拿到当前路由的信息

	return (
		<div className={styles.navbar}>
			<section className={styles.logoArea}>dylan blog</section>
			<section className={styles.linkArea}>
				{navs?.map((nav) => (
					<Link key={nav?.label} href={nav?.value} className={pathname === nav?.value ? styles.active : ''}>
						{nav?.label}
					</Link>
				))}
			</section>
		</div>
	);
};

export default Navbar;
