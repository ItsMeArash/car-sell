import { useState } from "react";
import Calender from "../icons/Calender";
import Company from "../icons/Company";
import DownArrow from "../icons/DownArrow";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Money from "../icons/Money";
import Road from "../icons/Road";
import styles from "./CarSection.module.css";

const CarSection = ({ carDetails }) => {
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    image,
    price,
    description,
    category,
  } = carDetails;

  const [showingMore, setShowingMore] = useState(false);

  const toggleDescription = () => {
    setShowingMore(!showingMore);
  };

  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <img src={image} alt="car-photo" />
        <div className={styles.details}>
          <h1>
            {name} {model}
          </h1>

          <div className={styles.detailsRow}>
            <div className={styles.detailsLabel}>
              <Company />
              <span>Manufacturer</span>
            </div>
            <span>{name}</span>
          </div>

          <div className={styles.detailsRow}>
            <div className={styles.detailsLabel}>
              <Model />
              <span>Model</span>
            </div>
            <span>{model}</span>
          </div>

          <div className={styles.detailsRow}>
            <div className={styles.detailsLabel}>
              <Calender />
              <span>Make Year</span>
            </div>
            <span>{year}</span>
          </div>

          <div className={styles.detailsRow}>
            <div className={styles.detailsLabel}>
              <Road />
              <span>KMs Driven</span>
            </div>
            <span>{distance}</span>
          </div>

          <div className={styles.detailsRow}>
            <div className={styles.detailsLabel}>
              <Location />
              <span>Location</span>
            </div>
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className={styles.payment}>
        <div className={styles.priceRow}>
          <div className={styles.priceLabel}>
            <Money />
            <span>Price</span>
          </div>
          <div className={styles.priceValue}>${price}</div>
        </div>
        <button>Buy</button>
      </div>

      <div className={styles.description}>
        <h4>Car Description</h4>
        <div
          className={`${styles.arrowContainer} ${
            showingMore ? styles.notShow : styles.show
          }`}
          onClick={toggleDescription}
        >
          <DownArrow />
        </div>
        {showingMore && <p>{description}</p>}
      </div>
    </div>
  );
};

export default CarSection;
