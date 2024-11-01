import React, { useState, useRef, useEffect } from "react";

function Project({
  id,
  title,
  image,
  description,
  links,
  imgs,
  appendix,
  expandedProjectId,
  setExpandedProjectId,
}) {
  const [isMoving, setIsMoving] = useState(false); // Step b: Moving to the left
  const contentRef = useRef(null);
  const isExpanded = expandedProjectId === id;

  const toggleExpand = () => {
    if (isExpanded) {
      setIsMoving(false);
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(id);
      setTimeout(() => setIsMoving(true), 300);
    }
  };

  // Helper function to get X and Y translation based on the component ID
  const getTransformPosition = (id) => {
    const col = Math.floor(id / 3);
    const row = id % 3;
    const translateX = row * -110; // Adjust X translation in percentage
    const translateY = col * -100; // Adjust Y translation in percentage
    return { translateX, translateY };
  };

  // Calculate transform values
  const { translateX, translateY } = getTransformPosition(id);

  useEffect(() => {
    if (contentRef.current && isExpanded) {
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
      contentRef.current.style.width = `100%`;
    }
  }, [isExpanded]);

  return (
    <article
      onClick={toggleExpand}
      ref={contentRef}
      className={`rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900 transition-all duration-700 ease-in-out
        ${isExpanded ? "w-full h-full" : "max-w-md"}
        ${
          expandedProjectId && !isExpanded
            ? "opacity-0 pointer-events-none transition-opacity duration-500"
            : "opacity-100"
        }`}
      style={{
        transform: isMoving
          ? `translate3d(${translateX}%, ${translateY}%, 0)`
          : "translate3d(0, 0, 0)",
        top: isMoving ? 0 : "auto",
        left: isMoving ? 0 : "auto",
        transition: `transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)`,
        zIndex: isMoving ? 10 : "auto",
      }}
    >
      {/* Main Content Area */}
      <div>
        {/* Image Section */}
        <div
          className={`md:${isExpanded ? "w-1/3" : "w-full"} ${
            isExpanded ? "p-4" : ""
          }`}
        >
          <img
            src={image}
            alt={title}
            loading="lazy"
            className={`w-full object-cover transition-all duration-500 ${
              isExpanded ? "h-60" : "h-40"
            }`}
          />
          <div className={`dark:bg-dark-card p-4 ${isExpanded ? "mt-4" : ""}`}>
            <h1 className="dark:text-light-heading font-semibold text-lg pt-1">
              {title}
            </h1>
            {isExpanded && (
              <div className="mt-4">
                {appendix?.map((item, index) => (
                  <p
                    key={index}
                    className="text-sm text-gray-500 mt-2 whitespace-pre-line"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Expanding Content Section */}
        {isExpanded && (
          <div className="md:w-2/3 w-full p-4 transition-all duration-700 ease-in-out">
            {/* Description */}
            <div className="mb-4">
              {description.map((desc, index) => (
                <p
                  key={index}
                  className="text-content mb-2 text-justify leading-relaxed"
                >
                  {desc}
                </p>
              ))}
            </div>

            {/* Links */}
            <div className="mb-4">
              {links.map((link, index) => (
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

            {/* Additional Images */}
            <div className="grid grid-cols-1 gap-4">
              {imgs.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Additional image ${index}`}
                  className="w-full h-auto rounded-md"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default Project;

// function Project({
//   title,
//   image,
//   description = undefined,
//   links = undefined,
//   imgs = undefined,
//   appendix = undefined,
// }) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [height, setHeight] = useState(0);
//   const contentRef = useRef(null);

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   useEffect(() => {
//     setHeight(isExpanded ? contentRef.current.scrollHeight : 0);
//   }, [isExpanded]);

//   return (
//     <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900">
//       <img src={image} alt="" loading="lazy" />
//       <div className="dark:bg-dark-card p-4">
//         <h1 className="dark:text-light-heading font-semibold text-lg pt-1">
//           {title}
//         </h1>
//       </div>
//     </article>
//   );
// }

// export default Project;
