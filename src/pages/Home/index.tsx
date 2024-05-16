import { Link } from "react-router-dom";
import Layout from "../../components/layout";
import Lottie from "react-lottie";

const Home = () => {
  /* const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../../assets/home.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }; */

  return (
    <div>
      <Layout>
        <div style={{ flex: 1 }}>
          <div style={{ flex: 1, paddingTop: 15, paddingLeft: 50 }}>
            <div
              className="hero bg-base-200"
              style={{
                height: "50vh",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                marginBottom: 15,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: 0,
              }}
            >
              <div
                className="hero-content flex-col lg:flex-row"
                style={{
                  alignItems: "flex-start",
                }}
              >
                {/* <Link to="/analytics">
                  <div style={{ alignItems: "flex-start" }}>
                    <Lottie options={defaultOptions} height={180} width={180} />
                  </div>
                </Link> */}

                <div style={{ flex: 1, flexDirection: "row", marginLeft: 20 }}>
                  <h1 className="text-5xl font-bold text-primary mt-10">
                    Hello, User {/* {firstName} */}!
                  </h1>
                  <p className="py-6" style={{ maxWidth: "100vh" }}>
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <Link className="btn btn-primary" to="/my-accounts">
                    Get Started
                  </Link>
                </div>
                <div
                  className="stats stats-vertical shadow"
                  style={{ alignSelf: "flex-end" }}
                >
                  <div className="stat">
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                  </div>

                  <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
