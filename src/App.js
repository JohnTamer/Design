import "./App.css";
import { Header } from "./components/header/header";
import { Subheader } from "./components/subheader/subheader";
import { Reshap } from "./components/reshape/reshap";
import { SectionOne } from "./components/sectionone/sectionone";
import { WorkWithUs } from "./components/workwithus/workwithus";
import { WorkFor } from "./components/workfor/workfor";
import { Gallery } from "./components/gallery/gallery";
import { Experience } from "./components/experience/experience";
export const App = () => {
  return (
    <div className="App">
      <Subheader />
      <Header />
      <Reshap />
      <SectionOne />
      <WorkWithUs />
      <WorkFor />
      <Gallery />
      <Experience />
    </div>
  );
};
