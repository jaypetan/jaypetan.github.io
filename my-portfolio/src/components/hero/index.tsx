import Nav from "./component/Nav";
import AboutMe from "./component/AboutMe";
import Skillset from "./component/Skillset";
import heroPic from "@/assets/heroPic.jpg";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col lg:grid grid-cols-2 h-[100dvh]">
        <div className="subsection">
          <Nav />
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2">
            <div className="subsection gap-2 pr-4">
              <AboutMe />
            </div>
            <div className="aspect-[2/3]">
              <img
                src={heroPic}
                alt="Tan Jun Peng"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="subsection">
            <Skillset />
          </div>
        </div>
      </section>
    </>
  );
}
