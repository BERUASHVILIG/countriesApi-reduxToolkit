import Country from "../../components/country";
import Filter from "../../components/input/filter";
import Search from "../../components/input/search";
import "./home.css";

const Home = () => {
  return (
    <section className="home-page-container">
      <div className="input-container">
        <Search />
        <Filter />
      </div>
      <Country />
    </section>
  );
};

export default Home;
