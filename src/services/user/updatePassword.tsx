import axios from 'axios';
import {serverURL} from '../../.env';

export const updatePassword = async (Email: string, Password: string) => {
  console.log('chamou updatePassword');
  try {
    const response = await axios.put(
      `${serverURL}/api/users/change-password/${Email}`,
      {NewPassword: Password},
    );
    console.log('Server response:', response.data);
    return true;
  } catch (error: any) {
    console.error('Error sending data to server:', error);
    return false;
  }
};
