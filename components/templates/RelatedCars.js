import carsData from "@/data/carsData";
import styles from "./RelatedCars.module.css";
import Card from "../modules/Card";

const RelatedCars = (props) => {
  const category = props.category;
  const relatedCars = carsData.filter((car) => car.category === category);
  return (
    <>
    <h4 className={styles.heading}>Other cars in {category} category</h4>
      <div className={styles.container}>
        {relatedCars.map((car) => (
          <Card {...car} />
        ))}
      </div>
    </>
  );
};

export default RelatedCars;
