import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Search.module.css";

import Suv from "@/components/icons/Suv";
import Hatchback from "@/components/icons/Hatchback";
import Sport from "@/components/icons/Sport";
import Sedan from "@/components/icons/Sedan";

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

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const router = useRouter();

  const searchHandler = () => {
    if (minPrice && maxPrice && minPrice <= maxPrice) {
      router.push(`/filter/${minPrice}/${maxPrice}`);
    } else {
      alert("Please fill in both min and max prices correctly")
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.search}>
        <div className={styles.minPrice}>
          <label htmlFor="min-price">Min Price</label>
          <input
            type="text"
            name="min-price"
            placeholder="Enter your start price"
            value={minPrice}
            onChange={(event) => {
              const input = event.target.value;
              const numericInput = input.replace(/[^0-9]/g, "");
              setMinPrice(numericInput);
            }}
          />
        </div>
        <div className={styles.maxprice}>
          <label htmlFor="max-price">Max Price</label>
          <input
            type="text"
            name="max-price"
            placeholder="Enter your ending price"
            value={maxPrice}
            onChange={(event) => {
              const input = event.target.value;
              const numericInput = input.replace(/[^0-9]/g, "");
              setMaxPrice(numericInput);
            }}
          />
        </div>
        <button onClick={searchHandler}>
          <p>Show Cars</p>
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-glyphs/30/visible--v1.png"
            alt="visible--v1"
          />
        </button>
      </section>
      <p style={{marginTop: "2rem"}}>Or show by category</p>
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
