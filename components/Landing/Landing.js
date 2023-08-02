import demon from "../../public/images/demon-front.png";
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
            <button>All Cars</button>
          </div>
        </article>
        <img className={styles.mainImg} src={demon.src} alt="demon" />
      </main>
      <section className={styles.search}>
        <div className={styles.minPrice}>
          <label htmlFor="min-price">Min Price</label>
          <input type="text" name="min-price" placeholder="&#9660; Enter your start price"/>
        </div>
        <div className={styles.maxprice}>
          <label htmlFor="max-price">Max Price</label>
          <input type="text" name="max-price" placeholder="&#9650; Enter your ending price"/>
        </div>
        <button>Show Cars</button>
      </section>
    </div>
  );
};

export default Landing;
