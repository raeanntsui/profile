import Photo from "./Homepage/photo";
import AboutMe from "./Homepage/aboutMe";
import WhatIDo from "./Homepage/whatIDo";
import Portfolio from "./Homepage/portfolio";
import Welcome from "./Homepage/welcome";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <div className="bg-red-100">
        <h1 className="bg-red-100">Hi There! My name is Raeann Tsui.</h1>
        <Link href="/users">Users</Link>
        <ProductCard />
        {/* <Photo />
        <AboutMe />
        <WhatIDo />
        <Portfolio />
        <Welcome /> */}
      </div>
    </main>
  );
}
