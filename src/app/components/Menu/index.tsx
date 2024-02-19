"use client";

import { useState } from "react";
import Image from 'next/image';
import styles from "./styles.module.css";
import logo from "./../../images/horizontallogo.svg";


const Menu = () => {
	const [submenuShown, setSubmenuShown] = useState(false)
  return (
		<header className={styles.header}>
			<a href="/"><Image src={logo} alt="old school"height={100}/></a>
			<div className={styles.rightSide}>
				<div className={styles.search}>
					<p>Search</p>
				</div>
				<ul className={styles.menu}>
					<li><a href="/">Learn</a></li>
					<li><a href="/events">Events</a></li>
					<li><a href="/resource">Hire us</a></li>
					<li >
						<a 
							href="/#" 
							// onMouseEnter={()=>setSubmenuShown(true)}
							// onMouseLeave={()=>setSubmenuShown(false)}
							onClick={
								(e) => {
									e.preventDefault(); 
									setSubmenuShown(!submenuShown);
								}
							}
							>School supplies</a>
						{submenuShown && <ul onClick={()=>setSubmenuShown(false)}>
							<li><a href="/category/tools">Tools</a></li>
							<li><a href="/category/tools">Reports & papers</a></li>
							<li><a href="/category/tools">Campaigns</a></li>
							<li><a href="/category/tools">Books & Blogs</a></li>
							<li><a href="/category/tools">Talks</a></li>
							<li><a href="/category/tools">Organizations</a></li>
							<li><a href="/category/tools">Videos</a></li>
							<li><a href="/category/tools">Podcasts</a></li>
						</ul>}
					</li>
					<li><a href="/submit">About</a></li>
					<li><a href="/submit">Subscribe</a></li>
					<li><a href="/submit">Donate</a></li>
				</ul>
			</div>
		</header>
  );
};

export default Menu;
