import styles from "./Search.module.css"

const Search = () => {
  return (
    <section className={styles.search}>
        <div className={styles.minPrice}>
          <label htmlFor="min-price">Min Price</label>
          <input
            type="text"
            name="min-price"
            placeholder="&#9660; Enter your start price"
          />
        </div>
        <div className={styles.maxprice}>
          <label htmlFor="max-price">Max Price</label>
          <input
            type="text"
            name="max-price"
            placeholder="Enter your ending price"
          />
        </div>
        <button>
          <p>Show Cars</p>
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-glyphs/30/visible--v1.png"
            alt="visible--v1"
          />
        </button>
      </section>
  );
};

export default Search;