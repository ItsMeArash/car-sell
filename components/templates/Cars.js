import Card from "../modules/Card";
import Search from "../shared/Search/Search";
import styles from "./Cars.module.css";

const Cars = ({ data }) => {
  return (
    <div className={styles.frame}>
      <Search />
      <div className={styles.container}>
        {data.map((car) => (
          <Card key={car.id} {...car}>
            {car.name}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cars;
