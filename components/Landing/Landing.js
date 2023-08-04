import Link from "next/link";
import demon from "../../public/images/demon-front.png";
import Search from "../shared/Search/Search";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <article className={styles.article}>
          <h2>Best cars in Car Sell</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <div>
            <button>
              <Link href="/cars">All Cars</Link>
            </button>
          </div>
        </article>
        <img className={styles.mainImg} src={demon.src} alt="demon" />
      </main>
      <Search />
    </div>
  );
};

export default Landing;
