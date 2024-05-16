import { RootState } from "../redux/types";
import { useSelector } from "react-redux";
import { AuthenticatedRoutes } from "./authStack";
import { UnauthenticatedRoutes } from "./nonAuthStack";
//const selectUserType = (state: RootState) => state.userType;
//const USERTYPE = useSelector(selectUserType);

const AppStack = () => {
  const selectIsLogged = (state: RootState) => state.isLogged;
  const ISLOGGED = useSelector(selectIsLogged);
  console.log("ISLOGGED = ", ISLOGGED);

  return <>{ISLOGGED ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}</>;
};
export default AppStack;
