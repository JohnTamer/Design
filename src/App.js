import "./App.css";
import { Header } from "./components/header/header";
import { Subheader } from "./components/subheader/subheader";
import { Reshap } from "./components/reshape/reshap";
export const App = () => {
  return (
    <div className="App">
      <Subheader />
      <Header />
      <Reshap />
    </div>
  );
};
