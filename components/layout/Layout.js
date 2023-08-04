import styles from "./Layout.module.css";
import Header from "../shared/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
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
