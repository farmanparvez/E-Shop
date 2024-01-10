import Carousel from "./components/Carousal/Carousal"
import Category from "./components/Category"
import LatestProduct from "./components/latestProduct/LatestProducts"
import MenFashion from "../MenFashion/MenContent"
import WominFashion from "../WomenFashion/WomneContent"
import Electronics from "../Electronics/ElectronicsContent"
import Container from "../../components/Container/Container"
import "./Home.scss"

const Home = () => {
  return (
    <Container>
      <Carousel />
      <Category />
      <LatestProduct />
      <MenFashion />
      <WominFashion />
      <Electronics />
    </Container>
  )
}

export default Home