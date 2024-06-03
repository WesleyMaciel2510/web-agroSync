import axios from "axios";
import { serverURL } from "../../.env";

export const searchPicture = async (
  IDTYPE: "LOADID" | "SCHEDULINGID",
  ID: number
) => {
  console.log("chamou searchPicture");
  console.log("searchPicture GOT = ", ID);

  try {
    console.log("entrou no try");

    const response = await axios.get(
      `${serverURL}/api/webPictures/search-pictures`,
      {
        params: { IDTYPE, ID },
      }
    );
    console.log("Response = ", response);

    console.log("Picture Data Received in getPictures = ", response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Unknown error occurred:", error);
  }
};
