import Styles from "./App.module.css";
import { StarShipList } from "./components/StarShipList/StarShipList.tsx";
import { Header } from "./components/Header/Header.tsx";

export function App() {
  const { container } = Styles;

  return (
    <div className={container}>
      <Header />
      <StarShipList />
    </div>
  );
}
