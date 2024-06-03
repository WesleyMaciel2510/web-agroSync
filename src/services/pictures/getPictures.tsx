import axios from "axios";
import { serverURL } from "../../.env";

export const getPictures = async () => {
  console.log("chamou getPictures");
  try {
    console.log("entrou no try");
    console.log("serverURL = ", serverURL);

    const response = await axios.get(
      `${serverURL}/api/webPictures/get-pictures`
    );
    console.log("response= ", response);

    /* if (response.data) { */
    console.log("Picture Data Received in getPictures = ", response.data);
    return { success: true, data: response.data };
    /* } else {
      return { success: false, data: [] };
    } */
  } catch (error) {
    console.error("Unknown error occurred:", error);
  }
};
