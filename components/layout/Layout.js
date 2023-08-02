import Link from "next/link";
import styles from "./Layout.module.css";
import logo from "../../public/logo.png";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <img src={logo.src} alt="logo" style={{width: "45px", borderRadius: "50%", margin: ".5rem"}}/>
        </Link>

        <ul className={styles.list}>
          <li>Cars List</li>
          <li>Contact me</li>
          <li>About me</li>
        </ul>

        <div>
          <button className={styles.signIn}>Sign In</button>
          <button className={styles.signUp}>Sign Up</button>
        </div>
      </header>

      <div>{children}</div>
      <footer className={styles.footer}>
        <a href="https://github.com/itsmearash" target="_blank">
          Github
        </a>
      </footer>
    </>
  );
};

export default Layout;
