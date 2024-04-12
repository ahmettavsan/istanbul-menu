import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "../components/Map.module.css";
export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lng = searchParams.get("lng");
  const lat = searchParams.get("lat");

  const navigate = useNavigate();
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>
        Positions {lat} , x {lng}{" "}
      </h1>
      <button onClick={() => setSearchParams({ lat: 211, lng: 12212 })}>
        Change lat & lng{" "}
      </button>
    </div>
  );
}
