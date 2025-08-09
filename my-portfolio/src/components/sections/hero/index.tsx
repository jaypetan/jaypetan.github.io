import Nav from "./component/Nav";
import AboutMe from "./component/AboutMe";
import Skillset from "./component/Skillset";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col lg:grid grid-cols-2 h-[90dvh]">
        <div className="subsection">
          <Nav />
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2">
            <div className="subsection gap-2">
              <AboutMe />
            </div>
            <div className="bg-gray-800 m-4 aspect-[2/3]" />
          </div>
          <div className="subsection">
            <Skillset />
          </div>
        </div>
      </section>
    </>
  );
}
