import "./App.css";
import { Header } from "./components/header/header";
import { Subheader } from "./components/subheader/subheader";
export const App = () => {
  return (
    <div className="App">
      <Subheader />
      <Header />
    </div>
  );
};
