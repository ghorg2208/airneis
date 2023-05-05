import { useEffect, useState } from 'react';
import axios from 'axios';

const useLoginValidation = (email, password) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API}clients.json`);
        const clients = response.data;
        const isClientValid = Object.values(clients).some((client) => client.email === email && client.password === password);
        setIsValid(isClientValid);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [email, password]);

  return isValid;
};

export default useLoginValidation;
