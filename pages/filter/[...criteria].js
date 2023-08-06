import Card from "@/components/modules/Card";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import styles from "../../styles/Filtered.module.css";
import Search from "@/components/shared/Search/Search";
import Back from "@/components/icons/Back";
import style from "../../styles/Category.module.css";

const Filtered = () => {
  const router = useRouter();

  const [minPrice, maxPrice] = router.query.criteria;

  const filteredCars = carsData.filter(
    (car) => car.price > minPrice && car.price < maxPrice
  );

  return (
    <div className={styles.container}>
      <div>
        <button className={style.back} onClick={() => router.back()}>
          <Back />
          Back
        </button>
      </div>
      <Search />
      <div className={styles.carsList}>
        {filteredCars.length ? filteredCars.map((car) => <Card key={car.id} {...car} />) : (
          <h3 className={styles.noMatch}>No cars match</h3>
        )}
      </div>
    </div>
  );
};

export default Filtered;
