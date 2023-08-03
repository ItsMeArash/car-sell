import styles from "./Benefits.module.css";

const Benefits = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.iconContainer}>
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/material-outlined/24/calendar--v1.png"
            alt="calendar--v1"
          />
        </div>

        <div className={styles.text}>
          <h4>Fast Car Delivery</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.iconContainer}>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios/50/car--v1.png"
            alt="car--v1"
          />
        </div>

        <div className={styles.text}>
          <h4>High variety of cars</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.iconContainer}>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios/50/marker--v1.png"
            alt="marker--v1"
          />
        </div>

        <div className={styles.text}>
          <h4>ِDeliver at your place</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
