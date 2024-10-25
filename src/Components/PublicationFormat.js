import React from "react";

function Publish({ Name, Link }) {
  return (
    <article className="py-1">
      <div className="text-content py-1 lg:max-w-3xl text-justify leading-relaxed">
        <a href={Link} target="_blank" rel="noreferrer noopener">
          {Name}
        </a>
      </div>
    </article>
  );
}

export default Publish;
