import Calender from "../icons/Calender";
import Company from "../icons/Company";
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
  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <img src={image} alt="car-image" />
        <div className={styles.details}>
          <h1>
            {name} {model}
          </h1>
          <div className={styles.itemRow}>
            <div className={styles.itemLabel}>
              <div className={styles.itemIcon}>
                <Company />
              </div>
              <span>Manufacturer</span>
            </div>
            <span className={styles.itemValue}>{name}</span>
          </div>
          <div className={styles.itemRow}>
            <div className={styles.itemLabel}>
              <div className={styles.itemIcon}>
                <Model />
              </div>
              <span>Model</span>
            </div>
            <span className={styles.itemValue}>{model}</span>
          </div>
          <div className={styles.itemRow}>
            <div className={styles.itemLabel}>
              <div className={styles.itemIcon}>
                <Calender />
              </div>
              <span>First Registration</span>
            </div>
            <span className={styles.itemValue}>{year}</span>
          </div>
          <div className={styles.itemRow}>
            <div className={styles.itemLabel}>
              <div className={styles.itemIcon}>
                <Road />
              </div>
              <span>KMs Driven</span>
            </div>
            <span className={styles.itemValue}>{distance}</span>
          </div>
          <div className={styles.itemRow}>
            <div className={styles.itemLabel}>
              <div className={styles.itemIcon}>
                <Location />
              </div>
              <span>Location</span>
            </div>
            <span className={styles.itemValue}>{location}</span>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <h4>Car Description</h4>
        <p>{description}</p>
      </div>
      <div className={styles.priceRow}>
        <div className={styles.priceLabel}>
          <div className={styles.priceIcon}>
            <Money />
          </div>
          <span>Price</span>
        </div>
        <span className={styles.priceValue}>${price}</span>
      </div>
      <button className={styles.buyButton}>Buy</button>
    </div>
  );
};

export default CarSection;
