import Benefits from "../components/Benefits/Benefits";
import Best from "../components/Best/Best";
import Carousel from "../components/Carousel/Carousel";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Carousel />
        <Benefits />
        <Best />
      </Layout>
    </>
  );
}
