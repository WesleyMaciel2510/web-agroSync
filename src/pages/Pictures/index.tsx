import Layout from "../../components/layout";
import profileImage from "../../assets/profile.jpg";
import { useState } from "react";
import { getPictures } from "../../services/pictures";

const Pictures = () => {
  const [hasImg, setHasImg] = useState(false);
  const [img, setImg] = useState("");
  const LoadImage = async () => {
    console.log("chamou LoadImage");
    //IDTYPE: "LOADID" | "SCHEDULINGID",
    //INDEX: number
    const IDTYPE = "SCHEDULINGID";
    const INDEX = 5;
    const result = await getPictures(IDTYPE, INDEX);
    if (result?.success) {
      console.log("result in Pictures Page = ", result.data);
      console.log("TYPEOF ImageBase64 = ", typeof result.data.IMGBASE64);
      setHasImg(true);
      //check if the index has only one or more than one picture
      if (typeof result.data.IMGBASE64 === "string") {
        setImg(result.data.IMGBASE64);
      } else {
        console.log("ImageBase64 AMOUNT = ", result.data.IMGBASE64.length);
        setImg(result.data.IMGBASE64[0]);
      }
    }
  };
  return (
    <div>
      <Layout>
        <div style={{ flex: 1 }}>
          <div style={{ flex: 1, paddingTop: 15, paddingLeft: 50 }}>
            <img
              src={hasImg ? `data:image/jpeg;base64,${img}` : profileImage}
              alt="Profile"
              style={{ width: "350px", height: "350px", borderRadius: 10 }}
            />
            <div style={{ padding: 20, justifyContent: "center" }}>
              <button
                onClick={LoadImage}
                className={
                  "w-1/8 inline-flex items-center px-4 py-2 bg-primary font-medium rounded-md"
                }
                style={{
                  alignItems: "center",
                  backgroundColor: "#3ac0a0",
                  color: "black",
                }}
              >
                Load Image
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Pictures;
