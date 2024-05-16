import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppStack from "./routes";
import { useDispatch } from "react-redux";
import { setIsLogged } from "./redux/actions";
import "./App.css";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged") === "true";
    dispatch(setIsLogged(isLogged));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <AppStack />
    </BrowserRouter>
  );
};

export default App;
