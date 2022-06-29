import "./App.css";
import { Header } from "./components/header/header";
import { Subheader } from "./components/subheader/subheader";
import { Reshap } from "./components/reshape/reshap";
import { SectionOne } from "./components/sectionone/sectionone";
import { WorkWithUs } from "./components/workwithus/workwithus";
export const App = () => {
  return (
    <div className="App">
      <Subheader />
      <Header />
      <Reshap />
      <SectionOne />
      <WorkWithUs />
    </div>
  );
};
