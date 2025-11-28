import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // store error object

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Ensure URL is valid
        let finalUrl = url;
        // Optionally, you can set a default sort if needed:
        // if (!url.includes("sort=")) {
        //   finalUrl += url.includes("?") ? "&sort=price:asc" : "?sort=price:asc";
        // }

        const res = await makeRequest.get(finalUrl);
        setData(res.data.data);
      } catch (err) {
        console.error("API Error:", err.response || err);
        setError(err);
      }

      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

