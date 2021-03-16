import React from "react";
import image from "../space-cat.jpg";
export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Space Cat"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-24 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Hi, I'm Dominic
          <br />
          Software Engineer
        </h1>
      </section>
    </main>
  );
}
