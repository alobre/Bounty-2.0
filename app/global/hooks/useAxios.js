import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import configURL from 'app/utils/config.js';
// import useUser from 'app/hooks/useUser';

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // console.log('API Config', config);
    return config;
  },
  function (error) {
    // Do something with request error
    console.error('API request', error);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('API response', response)
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.error('API response', error);
    return Promise.reject(error);
  },
);

export const useAxios = axiosParams => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [baseURL, setBaseURL] = useState('http://192.168.178.22:3000')
//   const { user, setUser } = useUser();

  const fetchData = async (params) => {
    try {
      const request = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        //   Authorization:
        //     user && user.accessToken ? ` Bearer ${user.accessToken}` : null,
          'Request-Datetime': new Date().getTime(),
        },
      };
        axios.defaults.baseURL = baseURL
        const result = await axios.request({ ...params, ...request })
        setResponse(result.data);
        return result.data;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []); // execute once only

  return { response, error, loading, fetchData };
};
