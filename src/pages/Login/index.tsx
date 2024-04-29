import "./styles.css";
import ImagePath from "./agro.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    console.log("chamou handleSubmit");
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in both username and password.");
      return;
    } else {
      console.log("entrou no else");
      navigate("/home");
      /* onst result = await setLogin(email, password);
      console.log("@@@@ result", result);
      if (result) {
        alert("Login Realizado."), router.push("/home");
      } else {
        alert(
          `Erro no Login!\n Verifique as credenciais inseridas ou redefina sua senha.`
        );
      } */
    }
  };

  return (
    <main>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <div style={{ flex: 3 }} className="board ">
          <img src={ImagePath} className="logo" alt="Logo" />
        </div>
        <div style={{ flex: 1 }}>
          <form
            className="shadow p-8 rounded-md"
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#3AC0A0",
              borderWidth: 1,
              borderColor: "gray",
              height: 550,
              width: "97%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 className="text-2xl font-bold text-center mb-4 text-white">
              Welcome Back!
            </h1>
            <div className="mb-4">
              <label
                className="input input-bordered flex items-center gap-2"
                htmlFor="email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-6">
              <label
                className="input input-bordered flex items-center gap-2"
                htmlFor="password"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div className="flex justify-between" style={{ color: "white" }}>
              <Link
                style={{ cursor: "pointer" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.textDecoration = "none")
                }
                to={"/sign-up"}
              >
                Sign Up
              </Link>
              <Link
                style={{ textAlign: "right", cursor: "pointer" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.textDecoration = "none")
                }
                to={"/forgot-password"}
              >
                Forgot My Password
              </Link>
            </div>

            <div className="flex justify-center" style={{ marginTop: 20 }}>
              <button
                type="submit"
                className={
                  "w-1/2 inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-opacity-50"
                }
                style={{
                  justifyContent: "center",
                  backgroundColor: "white",
                  color: "black",
                  transition: "transform 0.3s ease",
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
