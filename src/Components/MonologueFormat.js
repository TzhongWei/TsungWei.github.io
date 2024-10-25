import { useState, useRef, useEffect } from "react";

function Monologue({
  title,
  RepImage,
  abstract,
  date,
  description,
  OtherImages,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded]);

  return (
    <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <img
            src={RepImage}
            alt={title}
            loading="lazy"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3 dark:bg-dark-card p-4">
          <h1 className="dark:text-light-heading font-semibold text-lg pt-1">
            {title}
          </h1>
          <p className="text-content py-4 text-justify leading-relaxed">
            {abstract}
          </p>
          <p className="text-content py-2 text-sm text-gray-500">{date}</p>

          <button
            onClick={toggleExpand}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>

          {/* Expandable Content with Animation */}
          <div
            ref={contentRef}
            style={{
              height: `${height}px`,
              overflow: "hidden",
              transition: "height 0.5s ease-in-out",
            }}
          >
            <div className="text-content py-4 leading-relaxed">
              {description.map((desc) => (
                <p className="mb-4">{desc}</p>
              ))}
            </div>
            <div className="flex space-x-4 py-4 overflow-x-auto">
              {OtherImages.map((image, index) => (
                <img
                  src={image}
                  alt={`OtherImage-${index}`}
                  className="h-40 w-auto object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Monologue;
