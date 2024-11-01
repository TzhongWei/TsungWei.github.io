import React, { useState, useEffect } from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFading, setIsFading] = useState(false); // Control fade animation

  const handleProjectClick = (project) => {
    setIsFading(true); // Start fade-out animation
    setTimeout(() => setSelectedProject(project), 300); // Switch project after fade-out
  };

  const handleBackClick = () => {
    setIsFading(true); // Start fade-out animation
    setTimeout(() => setSelectedProject(null), 300); // Return to all projects after fade-out
  };

  // useEffect for fade-in animation on change of selectedProject
  useEffect(() => {
    if (selectedProject !== null || selectedProject === null) {
      setIsFading(false); // Fade-in animation once project is switched
    }
  }, [selectedProject]);

  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>

        {/* Render Focused Project */}
        {selectedProject ? (
          <div
            className="relative flex flex-col md:flex-row gap-8 mt-10"
            style={{
              opacity: isFading ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            {/* Left Side (Image, Title, Appendix) */}
            <div className="md:w-1/3">
              <img
                src={selectedProject.image}
                alt=""
                loading="lazy"
                className="rounded-xl shadow-xl shadow-slate-300 dark:shadow-slate-900 w-full object-cover"
              />
              <h1 className="dark:text-light-heading font-semibold text-lg pt-4">
                {selectedProject.title}
              </h1>
              {selectedProject.appendix && (
                <div className="mt-4 text-sm text-gray-500 whitespace-pre-line">
                  {selectedProject.appendix.map((item, index) => (
                    <p key={index} className="mb-2">
                      {item}
                    </p>
                  ))}
                </div>
              )}
              <button
                onClick={handleBackClick}
                className="btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1 min-w-fi mt-5"
              >
                Back to Projects
              </button>
            </div>

            {/* Right Side (Description, Links, Additional Images) */}
            <div className="md:w-2/3">
              <div className="mb-4">
                {selectedProject.description?.map((desc, index) => (
                  <p
                    key={index}
                    className="text-content mb-2 text-justify leading-relaxed"
                  >
                    {desc}
                  </p>
                ))}
              </div>

              <div className="mb-4">
                {selectedProject.links?.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-blue-500 underline block mb-2 hover:text-blue-700"
                  >
                    {link}
                  </a>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4">
                {selectedProject.imgs?.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Additional image ${index}`}
                    className="w-full h-auto rounded-md"
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Render All Projects with fade-in effect for main grid
          <div
            className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 transition-opacity duration-500"
            style={{
              opacity: isFading ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            {React.Children.toArray(
              projectDetails.map((project) => (
                <Project
                  {...project}
                  onClick={() => handleProjectClick(project)}
                />
              ))
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default Projects;
