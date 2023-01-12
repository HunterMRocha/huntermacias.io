import React from "react";
import { Image } from "@nextui-org/react";
import MyModal from "../MyModal";

const WorkCard = ({ img, name, description, modalDescription, url }) => {
  return (
    <div
      className="outline hover:outline-green-300 outline-green-300/20 
        overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
    >
      <div
        className="relative mob:h-auto rounded-lg overflow-hidden transition-all ease-out duration-300 "
        style={{ height: "165px" }}
      >
        <Image
          css={{width:"fill"}}
          loading="lazy"
          src={img}
          alt={name}
          className="hover:scale-110 transition-all ease-in duration-600"
          objectFit="cover"
        ></Image>
      </div>
      <h1 className="mob:text-lg hover:text-emerald-400 text-emerald-500 mt-5 text-2xl">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-sm opacity-50">
        {description ? description : "Description"}
      </h2>
      <h2 className="text-xs opacity-50">
        Rating: ⭐⭐⭐⭐⭐
      </h2>
      <div className="right-0">
        <MyModal title={name} description={description} modalDescription={modalDescription} url={url} />
      </div>
    </div>
  );
};

export default WorkCard;