import { useEffect, useState } from "react";
import { Github_Url } from "../utils/constant";

const useGetGithub = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Github_Url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setData({}); // Handle error by setting an empty object.
      }
    };

    fetchData();
  }, []);

  //   // Provide default values while destructuring.
  //   const {
  //     avatar_url = "",
  //     name = "Unknown User",
  //     location = "Location not available",
  //   } = data || {}; // Ensure destructuring is safe when `data` is null.

  return data;
};

export default useGetGithub;
