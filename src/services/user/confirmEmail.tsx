import axios from 'axios';
import {serverURL} from '../../.env';

export const confirmEmailService = async (emailToValidate: string) => {
  console.log('Called confirmEmailService');
  console.log('EMAIL = ', emailToValidate);
  try {
    const response = await axios.post(
      `${serverURL}/api/users/email-verification`,
      {
        Email: emailToValidate,
      },
    );
    console.log('Server response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error sending data to server:', error);
    return {
      error: error.response ? error.response.data : error.message,
    };
  }
};
