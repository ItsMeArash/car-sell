import CarSection from "@/components/templates/CarSection";
import RelatedCars from "@/components/templates/RelatedCars";
import carsData from "@/data/carsData";

const CarDetails = ({ carDetails }) => {
  return (
    <div style={{marginTop: "5rem"}}>
      <CarSection carDetails={carDetails} />
      <RelatedCars category={carDetails.category}/>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = carsData.map((car, index) => ({
    params: { carId: (index + 1).toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const carId = parseInt(params.carId, 10);
  const carDetails = carsData[carId - 1];

  return {
    props: {
      carDetails,
    },
  };
}

export default CarDetails;
