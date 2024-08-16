import Photo from "./Homepage/photo";
import AboutMe from "./Homepage/aboutMe";
import WhatIDo from "./Homepage/whatIDo";
import Portfolio from "./Homepage/portfolio";
import Welcome from "./Homepage/welcome";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <div id="main-container" className="flex flex-row">
          <div
            id="left-container"
            className="basis-1/4 border-2 border-sky-500">
            <div className="">
              <Image
                className="rounded-full border-8 border-grey-500 hover:border-red-500"
                src="/myPictures/profile-picture.jpg"
                width={200}
                height={200}
                alt="Image of Raeann"
              />
            </div>
            <div>
              <h1>Raeann Tsui</h1>
            </div>
            <div className="flex-col">
              <a href="#aboutme">About Me</a>
              <a href="#whatido">What I Do</a>
              <a href="#portfolio">Portfolio</a>
            </div>
          </div>
          <div
            id="right-container"
            className="basis-3/4 border-2 border-red-500">
            <h1>
              Hi there! I'm a software engineer based in San Francisco, CA.
            </h1>
            <button className="btn btn-primary">Hire Me</button>
            {/* <Photo /> */}
            <AboutMe />
            <WhatIDo />
            <Portfolio />
          </div>
        </div>
        {/* <Link href="/users">Users</Link> */}
        {/* <ProductCard /> */}
      </div>
    </main>
  );
}
