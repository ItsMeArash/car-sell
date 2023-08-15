import Card from "@/components/modules/Card";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import styles from "../../styles/Filtered.module.css";
import Search from "@/components/shared/Search/Search";
import Back from "@/components/icons/Back";
import style from "../../styles/Category.module.css";

const Filtered = ({ filteredCars }) => {
  const router = useRouter();

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
        {filteredCars.length ? (
          filteredCars.map((car) => <Card key={car.id} {...car} />)
        ) : (
          <h3 className={styles.noMatch}>No cars match</h3>
        )}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
 
  const examplePaths = [
    { params: { criteria: ['5000', '10000'] } },
    { params: { criteria: ['10000', '15000'] } },
    // Add more paths as needed
  ];

  return { paths: examplePaths, fallback: false };
}

export async function getStaticProps({ params }) {
  const [minPrice, maxPrice] = params.criteria.map(Number);

  const filteredCars = carsData.filter(
    (car) => car.price > minPrice && car.price < maxPrice
  );

  return {
    props: {
      filteredCars,
    },
  };
}

export default Filtered;
