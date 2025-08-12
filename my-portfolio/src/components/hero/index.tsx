import Nav from "./component/Nav";
import AboutMe from "./component/AboutMe";
import Skillset from "./component/Skillset";
import heroPic from "@/assets/heroPic.jpg";
import Light from "./component/Light";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] xl:grid-cols-2 lg:h-[100dvh]">
        <div className="flex flex-row-reverse lg:flex-col gap-2 justify-between">
          <div className="flex flex-col my-4 text-nowrap">
            <Nav />
          </div>
          <div className="mb-4">
            <Light/>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col-reverse sm:grid grid-cols-2">
            <div className="flex flex-col gap-2 mt-4 pr-4">
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
          <div className="flex flex-col justify-center h-full">
            <Skillset />
          </div>
        </div>
      </section>
    </>
  );
}
