import Suv from "@/components/icons/Suv";
import styles from "./Search.module.css";
import Hatchback from "@/components/icons/Hatchback";
import Sport from "@/components/icons/Sport";
import Sedan from "@/components/icons/Sedan";
import Link from "next/link";

const Search = () => {
  const categoryLookUp = [
    {
      category: "Suv",
      icon: <Suv />,
    },

    {
      category: "Sport",
      icon: <Sport />,
    },

    {
      category: "Sedan",
      icon: <Sedan />,
    },

    {
      category: "Hatchback",
      icon: <Hatchback />,
    },
  ];
  return (
    <div className={styles.container}>
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
      <section className={styles.categories}>
        {categoryLookUp.map((category) => (
          <Link
            key={category.category}
            href={`/category/${category.category.toLocaleLowerCase()}`}
          >
            <div className={styles.category}>
              {category.icon}
              <p>{category.category}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Search;
