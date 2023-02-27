import About from "./About/page";
import Courses from "./Courses/page";
import DetailedProgram from "./Detail/page";
import End_Goal from "./End-Goal/page";
import Fellowship from "./Fellowship/page";

export default function Home() {
  return (
    <>
      <About />
      <Fellowship />
      <DetailedProgram />
      <Courses />
      <End_Goal />
    </>
  );
}
