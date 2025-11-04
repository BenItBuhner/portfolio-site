import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import styles from "./Header.module.css";

const imgFrame44 = "/assets/frame44.png";
const imgRectangle377 = "/assets/rectangle377.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.backgroundImage}>
          <Image
            alt=""
            src={imgFrame44}
            fill
            className={styles.bgImage}
            style={{ objectPosition: "50% 50%" }}
            priority
          />
        </div>
        <div className={styles.content}>
          <div className={styles.nameContainer}>
            <Link href="/" className={styles.nameLink}>
              <p className={styles.name}>Bennett Buhner</p>
            </Link>
          </div>
        </div>
        <nav className={styles.tagContainer}>
          <div className={styles.tagBackground}>
            <Image
              alt=""
              src={imgRectangle377}
              width={400}
              height={45}
              className={styles.tagImage}
            />
          </div>
          <div className={styles.navLinks}>
            <Link href="/overview" className={styles.navLink}>
              Overview
            </Link>
            <span className={styles.bullet}>•</span>
            <Link href="/projects" className={styles.navLink}>
              Projects
            </Link>
            <span className={styles.bullet}>•</span>
            <Link href="/blog" className={styles.navLink}>
              Blog
            </Link>
            <span className={styles.bullet}>•</span>
            <Link href="/contact-me" className={styles.navLink}>
              Contact me
            </Link>
          </div>
        </nav>
        <div className={styles.hamburgerContainer}>
          <HamburgerMenu />
        </div>
      </div>
      <div className={styles.headerFade} aria-hidden />
    </header>
  );
}

