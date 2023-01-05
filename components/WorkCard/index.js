import React from "react";
import { Image } from "@nextui-org/react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="outline hover:outline-green-300 outline-green-300/20 
        overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative mob:h-auto rounded-lg overflow-hidden transition-all ease-out duration-300 "
        style={{ height: "150px" }}
      >
        <Image
          css={{width:"fill", maxHeight:"175px"}}
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-in duration-600"
          src={img}
          objectFit="cover"
        ></Image>
      </div>
      <h1 className="hover:text-emerald-400 text-emerald-500 mt-5 text-2xl">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-sm opacity-50">
        {description ? description : "Description"}
      </h2>
      <h2 className="text-sm opacity-50">
        Rating: ⭐⭐⭐⭐⭐
      </h2>
    </div>
  );
};

export default WorkCard;
