import CarSection from "@/components/templates/CarSection";
import RelatedCars from "@/components/templates/RelatedCars";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

const CarDetails = () => {
  const router = useRouter();
  const carId = router.query.carId;
  const carDetails = carsData[carId - 1];

  return (
    <div style={{marginTop: "5rem"}}>
      <CarSection carDetails={carDetails} />
      <RelatedCars category={carDetails.category}/>
    </div>
  );
};

export default CarDetails;