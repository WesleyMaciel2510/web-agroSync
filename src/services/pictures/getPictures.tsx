import axios from "axios";
import { serverURL } from "../../.env";

export const getPictures = async (
  IDTYPE: "LOADID" | "SCHEDULINGID",
  INDEX: number
) => {
  console.log("chamou getPictures");

  console.log("getPictures GOT = ", INDEX);

  try {
    console.log("entrou no try");
    console.log("serverURL = ", serverURL);

    const response = await axios.get(
      `${serverURL}/api/webPictures/get-pictures`,
      {
        params: { IDTYPE, INDEX },
      }
    );
    console.log(INDEX, ") Response = ", response);

    console.log("Picture Data Received in getPictures = ", response.data);
    return { success: true, data: response.data };
    return { success: false, data: [] };
  } catch (error) {
    console.error("Unknown error occurred:", error);
  }
};
