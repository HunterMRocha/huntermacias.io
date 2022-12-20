import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="outline hover:outline-green-300 outline-green-300/10 
        overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "300px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-in duration-600"
          src={img}
        ></img>
      </div>
      <h1 className="hover:text-emerald-400 text-emerald-500 mt-5 text-4xl">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-lg opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
