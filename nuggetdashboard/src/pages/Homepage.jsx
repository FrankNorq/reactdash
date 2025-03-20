import CircularText from "../components/RotatingText/CircularText";
import BitcoinChart from "../components/charts/BitcoinChart";
import IndexChart from "../components/charts/IndexChart";
function HomePage() {
  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold text-center text-black p-6!">
        Welcome to my saving chart to compair Bitcoin vs Index
      </h2>
      <p className="text-xl font-bold text-center text-black p-4!">
        Fill in the information on the calculators and watch the charts change
      </p>
      <IndexChart></IndexChart>
      <section className="mt-5">
        <CircularText text="Bitcoin" />
      </section>
      <BitcoinChart></BitcoinChart>
    </div>
  );
}

export default HomePage;
