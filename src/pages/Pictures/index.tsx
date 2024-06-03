import Layout from "../../components/layout";
import profileImage from "../../assets/profile.jpg";
import { useEffect, useState } from "react";
import { getPictures } from "../../services/pictures";

const Pictures = () => {
  const [hasImg, setHasImg] = useState<boolean[]>([]);
  const [img, setImg] = useState<string[]>([]);
  const IDTYPE = "SCHEDULINGID";
  //const IDTYPE = "LOADID";
  const amountOfPictures = 6;

  useEffect(() => {
    const LoadImage = async () => {
      for (let i = 0; i < amountOfPictures; i++) {
        const result = await getPictures(IDTYPE, i);
        if (result?.success) {
          console.log(
            "result in Pictures Page  = ",
            typeof result.data.IMGBASE64
          );
          setHasImg((prevHasImg) => [...prevHasImg, true]);

          if (typeof result.data.IMGBASE64 === "string") {
            setImg((prevImg) => [...prevImg, result.data.IMGBASE64]);
          } else {
            console.log("ImageBase64 AMOUNT = ", result.data.IMGBASE64.length);
            setImg((prevImg) => [...prevImg, result.data.IMGBASE64[0]]);
          }
        } else {
          setHasImg((prevHasImg) => [...prevHasImg, false]);
          setImg((prevImg) => [...prevImg, ""]);
        }
      }
    };

    LoadImage();
  }, []);

  // GRID =======================================================================
  const renderGrid = () => {
    const gridItems = [];
    for (let i = 0; i < 15; i++) {
      gridItems.push(
        <div key={i} style={{ margin: 10 }}>
          {hasImg[i] ? (
            <img
              style={{
                width: "150px",
                height: "150px",
                borderRadius: 10,
                borderColor: "#3ac0a0",
                borderWidth: "3px",
              }}
              src={`data:image/jpeg;base64,${img[i]}`}
              //src={hasImg[i] ? `data:image/jpeg;base64,${img[i]}` : profileImage}
              alt={`Profile ${i}`}
            />
          ) : (
            <div
              style={{
                width: "150px",
                height: "150px",
                borderRadius: 10,
                backgroundColor: "black",
                borderColor: "#3ac0a0",
                borderWidth: "3px",
              }}
            />
          )}
        </div>
      );
    }
    return gridItems;
  };
  // ============================================================================

  return (
    <div>
      <Layout>
        <div style={{ flex: 1 }}>
          <div
            style={{
              flex: 1,
              paddingTop: 20,
              paddingLeft: 50,
              paddingRight: 50,
            }}
          >
            <div
              style={{
                padding: 10,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  flex: 1,
                }}
              >
                <div style={{ width: "50%", margin: "auto" }}>
                  <label className="input input-bordered flex items-center w-full">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Pesquisa"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: 5,
              }}
            >
              {renderGrid()}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Pictures;
