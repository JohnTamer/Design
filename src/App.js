import "./App.css";
import { Header } from "./components/header/header";
import { Subheader } from "./components/subheader/subheader";
import { Reshap } from "./components/reshape/reshap";
import { SectionOne } from "./components/sectionone/sectionone";
export const App = () => {
  return (
    <div className="App">
      <Subheader />
      <Header />
      <Reshap />
      <SectionOne />
    </div>
  );
};
