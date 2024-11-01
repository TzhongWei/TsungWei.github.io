import React, { useState } from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>
        <div
          className={`relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 transition-all duration-500`}
        >
          {React.Children.toArray(
            projectDetails.map(
              ({ title, image, description, links, imgs, Appendix }, index) => (
                <Project
                  id={index}
                  title={title}
                  image={image}
                  description={description}
                  links={links}
                  imgs={imgs}
                  appendix={Appendix}
                  expandedProjectId={expandedProjectId}
                  setExpandedProjectId={setExpandedProjectId}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
