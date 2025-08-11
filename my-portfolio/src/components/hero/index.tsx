import Nav from "./component/Nav";
import AboutMe from "./component/AboutMe";
import Skillset from "./component/Skillset";
import heroPic from "@/assets/heroPic.jpg";
import Cup from "./component/Cup";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] xl:grid-cols-2 lg:h-[100dvh]">
        <div className="flex flex-row-reverse lg:flex-col gap-2 justify-between">
          <div className="subsection mb-4">
            <Nav />
          </div>
          <Cup />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col-reverse sm:grid grid-cols-2">
            <div className="subsection gap-2 pr-4">
              <AboutMe />
            </div>
            <div>
              <img
                src={heroPic}
                alt="Tan Jun Peng"
                className="object-cover rounded-full aspect-square md:rounded-none md:aspect-auto h-full w-3/4 md:w-full"
              />
            </div>
          </div>
          <div className="subsection overflow-hidden">
            <Skillset />
          </div>
        </div>
      </section>
    </>
  );
}
