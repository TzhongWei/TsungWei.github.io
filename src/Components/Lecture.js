import React, { useState, useRef, useEffect } from "react";

function Lecture({
  Topic,
  company,
  location,
  duration,
  detailsContent = undefined,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setHeight(isExpanded ? contentRef.current.scrollHeight : 0);
  }, [isExpanded]);

  return (
    <article className="pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20">
      <div className="flex justify-between items-center">
        <h1 className="text-content md:text-lg lg:text-xl">{Topic}</h1>
        <button
          onClick={toggleExpand}
          className="btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1 min-w-fit"
        >
          {isExpanded ? "Hide Details" : "Details..."}
        </button>
      </div>
      <div className="flex justify-between pt-2">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center pr-5">
            <p className="text-content text-xs md:text-sm font-light pl-1">
              {company}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-content text-xs md:text-sm font-light pl-1">
              {location}
            </p>
          </div>
        </div>
        <p className="text-content text-xs md:text-sm font-light pl-1 min-w-fit">
          {duration}
        </p>
      </div>

      {/* Expandable Content with Smooth Transition */}
      <div
        ref={contentRef}
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
      >
        <img
          src={detailsContent.image}
          alt="Lecture Details"
          className="w-full h-auto"
          style={{ width: "400px", height: "400px", objectFit: "cover" }}
        />
        <div className="text-content py-8 lg:max-w-3xl text-justify leading-relaxed">
          {Array.isArray(detailsContent.description) ? (
            detailsContent.description.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))
          ) : (
            <p>{detailsContent.description}</p>
          )}
        </div>

        <p className="text-content py-8 lg:max-w-3xl text-justify leading-relaxed">
          {detailsContent.materialLink ? (
            <a
              href={detailsContent.classMaterial}
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-500 underline hover:text-blue-700"
            >
              {detailsContent.classMaterial}
            </a>
          ) : (
            <p></p>
          )}
        </p>
      </div>
    </article>
  );
}

export default Lecture;
