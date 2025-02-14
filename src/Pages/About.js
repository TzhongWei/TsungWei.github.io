import React from "react";
import Work from "../Components/Work";
import Funding from "../Components/Funding";
import Lecture from "../Components/Lecture";
import {
  personalDetails,
  workDetails,
  eduDetails,
  LecDetails,
  FundDetails
} from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl text-justify leading-relaxed">
          {personalDetails.about.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </p>
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Lecture
        </h1>
        {React.Children.toArray(
          LecDetails.map(
            ({ Topic, Company, Location, Duration, DetailsContent }) => (
              <Lecture
                Topic={Topic}
                company={Company}
                location={Location}
                duration={Duration}
                detailsContent={DetailsContent}
              />
            )
          )
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Funding
        </h1>
        {React.Children.toArray(
          FundDetails.map(({FundingName, Date, Source}) => (
            <Funding
              Name = {FundingName}
              Date = {Date}
              Source = {Source}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
