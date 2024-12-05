import React from "react";
import { MonologueDetails } from "../MonologueDetails.js";
import MonologueFormat from "../Components/MonologueFormat.js";

function Monologue() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-6">
          Monologue
        </h1>
        <p className="text-content py-8 lg:max-w-3xl text-justify leading-relaxed">
          Hello there! Here, I’ve shared my personal ideas and concepts related
          to research or games (specifically Minecraft). Feel free to leave your
          thoughts, whether you like them or have suggestions for improvement,
          in the comments below!
        </p>
        <div className="grid grid-cols-1 gap-10">
          {MonologueDetails.map((item) => (
            <MonologueFormat
              title={item.title}
              RepImage={item.RepImage}
              abstract={item.abstract}
              date={item.date}
              description={item.description}
              OtherImages={item.OtherImages}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Monologue;
