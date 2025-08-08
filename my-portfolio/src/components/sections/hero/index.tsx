import Nav from "./component/Nav";
import AboutMe from "./component/AboutMe";
import Skillset from "./component/Skillset";

function Hero() {
  return (
    <>
      <section className="flex flex-col lg:grid grid-cols-2 h-screen ">
        <div className="subsection mx-4">
          <Nav />
        </div>
        <div className="grid grid-cols-2">
          <div className="subsection gap-2">
            <AboutMe />
          </div>
          <div className="bg-gray-800 m-4" />
        </div>
        <div className="sm:col-start-2 subsection">
          <Skillset />
        </div>
      </section>
    </>
  );
}

export default Hero;
