import React from "react";
import Shimmer from "./Shimmer";
import useGetGithub from "../utils/useGetGithub";
const Getgit = () => {
  const data = useGetGithub();
  console.log(data);
  if (data === null) return <Shimmer />;
  const { name, avatar_url, location } = data;
  return (
    <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-sm mx-auto mt-10">
      <img
        className="w-32 h-32 rounded-full border-4 border-blue-500"
        src={avatar_url}
        alt={`${name}'s avatar`}
      />
      <h1 className="text-2xl font-bold text-gray-800 mt-4">{name}</h1>
      <p className="text-gray-600 mt-2">
        {location || "Location not available"}
      </p>
    </div>
  );
};

export default Getgit;
