import styles from "./RelatedCars.module.css"

const RelatedCars = (props) => {
  const category = props.category;
  console.log(props);
  return (
    <div className={styles.container}>
      {category}
    </div>
  );
};

export default RelatedCars;