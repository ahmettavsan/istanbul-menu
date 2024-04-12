import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";

export default function CountryList() {
  const { cities, loading } = useCities();

  const countries = cities.reduce(
    (arr, city) => {
      if (!arr.map((el) => el.city).includes(city.country)) {
        console.log(arr, "arr");
        return [...arr, { country: city.country, emoji: city.emoji }];
      } else {
        return arr;
      }
    },

    []
  );
  if (loading) return <Spinner />;
  if (!countries.length) {
    return (
      <Message message="Add your first city by clicking on a country on the map" />
    );
  }
  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem key={i} country={country} />
      ))}
    </ul>
  );
}
