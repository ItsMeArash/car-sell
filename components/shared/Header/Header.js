import styles from "./Header.module.css";
import Link from "next/link";
import logo from "../../../public/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img
          src={logo.src}
          alt="logo"
          style={{ width: "45px", borderRadius: "50%", margin: ".5rem" }}
        />
      </Link>

      <ul className={styles.list}>
        <li>
          <Link href="/cars">Cars List</Link>
        </li>
        <li>Contact me</li>
        <li>About me</li>
      </ul>

      <div>
        <button className={styles.signIn}>Sign In</button>
        <button className={styles.signUp}>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
