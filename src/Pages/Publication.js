import React from "react";
import { PublicationsDetails } from "../Details";
import Publish from "../Components/PublicationFormat";

function publications() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-6">
          Publications
        </h1>
        <h1 className="text-gray-heading dark:text-light-content md:text-x1 xl:text-2xl xl:leading-tight font-bold leading-snug">
          Conference Papers | Journals Papers | Theis
        </h1>
        {React.Children.toArray(
          PublicationsDetails.ConferenceAndJournalPapers.map(
            ({ Name, Link }) => <Publish Name={Name} Link={Link} />
          )
        )}
        {React.Children.toArray(
          PublicationsDetails.ThsisAndBooks.map(({ Name, Link }) => (
            <Publish Name={Name} Link={Link} />
          ))
        )}
      </section>
      <section>
        <h1 className="text-gray-heading dark:text-light-content md:text-x1 xl:text-2xl xl:leading-tight font-bold leading-snug">
          Coming Soon
        </h1>
        {React.Children.toArray(
          PublicationsDetails.ComingSoon.map(({ Name, Link }) => (
            <Publish Name={Name} Link={Link} />
          ))
        )}
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <p></p>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Portfolio
        </h1>
      </section>
      {React.Children.toArray(
        PublicationsDetails.Portfolio.map(({ Name, Link }) => (
          <Publish Name={Name} Link={Link} />
        ))
      )}
    </main>
  );
}

export default publications;
