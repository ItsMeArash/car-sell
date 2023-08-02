import styles from "./Sponsors.module.css";
import fordLogo from "../../public/images/ford.svg";
import chevyLogo from "../../public/images/chevy.png";
import demonLogo from "../../public/images/demon.png";

const Sponsors = () => {
  return (
    <div className={styles.container}>
      <img src={fordLogo.src} alt="Ford Logo" />
      <img src={chevyLogo.src} alt="Chevy Logo" />
      <img src={demonLogo.src} alt="Demon Logo" />
    </div>
  );
};

export default Sponsors;
