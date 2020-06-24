import axios, { AxiosResponse } from 'axios';
import { InputValues } from '../validation/validation';

const url: string = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/email' : 'production';

const sendEmail: (data: InputValues) => Promise<AxiosResponse<any>> = async (data: InputValues) => {
  const response = await axios({
    method: 'POST',
    url,
    data,
  });

  return response;
};

export { sendEmail };
