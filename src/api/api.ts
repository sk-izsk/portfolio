import axios, { AxiosResponse } from 'axios';
import io from 'socket.io-client';
import { InputValues } from '../validation/validation';

const sendEmailUrl: string =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/email'
    : 'https://izsk-portfolio-backend.herokuapp.com/email';

const informationsUrl: string =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/informations'
    : 'https://izsk-portfolio-backend.herokuapp.com/informations';

const socketInformationsUrl: string =
  process.env.NODE_ENV === 'development' ? 'http://localhost:5000/' : 'https://izsk-portfolio-backend.herokuapp.com/';

const socket = io(socketInformationsUrl);

const sendEmail: (data: InputValues) => Promise<AxiosResponse<any>> = async (data: InputValues) => {
  const response: AxiosResponse<any> = await axios({
    method: 'POST',
    url: sendEmailUrl,
    data,
  });

  return response;
};

const getInformations: () => Promise<AxiosResponse<any>> = async () => {
  const response: AxiosResponse<any> = await axios(informationsUrl);

  return response;
};

export { sendEmail, getInformations, socket };
