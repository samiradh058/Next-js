import Link from "next/link";

import LogoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />

      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          {/* LogoImg is an object */}
          <Image src={LogoImg} alt="Logo" priority />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Comminity</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
