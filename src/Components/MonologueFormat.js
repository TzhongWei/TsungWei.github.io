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

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const toggleExpand = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment(""); // Clear input after submission
    }
  };

  return (
    <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/3 sticky top-4 self-start">
          <img
            src={RepImage}
            alt={title}
            loading="lazy"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section */}
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

          {/* Expandable Content */}
          <div
            ref={contentRef}
            style={{
              height: `${height}px`,
              overflow: "hidden",
              transition: "height 0.5s ease-in-out",
            }}
          >
            {/* Description Section */}
            <div className="text-content py-4 leading-relaxed">
              {description.map((desc, index) => (
                <p key={index} className="mb-4">
                  {desc}
                </p>
              ))}
            </div>

            {/* Image Gallery Section */}
            <div className="flex space-x-4 py-4 overflow-x-auto">
              {OtherImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`OtherImage-${index}`}
                  className="h-40 w-auto object-cover rounded-lg"
                />
              ))}
            </div>

            {/* Comment Section */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold dark:text-light-heading">
                Leave a Comment:
              </h2>
              <form onSubmit={handleCommentSubmit} className="mt-4">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write your comment..."
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                />
                <button
                  type="submit"
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </form>

              <div className="mt-6">
                <h3 className="text-lg font-medium dark:text-light-heading">
                  Comments:
                </h3>
                {comments.length > 0 ? (
                  comments.map((comment, index) => (
                    <p key={index} className="mt-2 border-b pb-2">
                      {comment}
                    </p>
                  ))
                ) : (
                  <p className="mt-2 text-sm text-gray-500">No comments yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Monologue;
