import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useLoadApi = ({
  url,
  method,
  body = null,
  headers = null,
  params = null,
}) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const fetchData = async () => {
    try {
      const res = await axios[method](
        url,
        JSON.parse(params),
        JSON.parse(headers),
        JSON.parse(body)
      );
      setResponse(res.data);
    } catch (error) {
      setError(error);
    }
  };
  const isLoading = useMemo(() => !error && !response, [error, response]);
  useEffect(() => {
    fetchData();
  }, [url, method, body, headers]);

  return { response, isLoading, error };
};

export default useLoadApi;
