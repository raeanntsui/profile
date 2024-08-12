import Photo from "./Homepage/photo";
import AboutMe from "./Homepage/aboutMe";
import WhatIDo from "./Homepage/whatIDo";
import Portfolio from "./Homepage/portfolio";

export default function Home() {
  return (
    <div>
      <h1 className="bg-red-100">Hi There! My name is Raeann Tsui.</h1>
      <Photo />
      <AboutMe />
      <WhatIDo />
      <Portfolio />
    </div>
  );
}
