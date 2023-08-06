import Card from "@/components/modules/Card";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import styles from "../../styles/Category.module.css";
import Back from "@/components/icons/Back";

const Category = () => {
  const router = useRouter();
  const category = router.query.category;
  console.log(router);
  const categoryCars = carsData.filter((car) => car.category === category);

  return (
    <div className={styles.container}>
      <div>
        <button className={styles.back} onClick={() => router.back()}>
          <Back />
          Back
        </button>
      </div>
      <div className={styles.carsList}>
        {categoryCars.map((car) => (
          <Card key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
};

export default Category;
