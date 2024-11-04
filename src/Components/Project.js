import React from "react";

function Project({ title, image, onClick }) {
  return (
    <article
      onClick={onClick}
      className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900 cursor-pointer transition-all duration-300 hover:scale-105"
    >
      <div className="w-full h-64 overflow-hidden relative">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="dark:bg-dark-card p-4">
        <h1 className="dark:text-light-heading font-semibold text-lg pt-1">
          {title}
        </h1>
      </div>
    </article>
  );
}

export default Project;
