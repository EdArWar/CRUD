import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AuthApi from "./api/AuthApi";
import "./App.css";
import AppHOC from "./components/hoc/AppHOC";
import PageRoutes from "./routes/PageRoutes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    !!localStorage.getItem("token") && dispatch(AuthApi.auth());
  }, []);

  return (
    <>
      <AppHOC>
        <PageRoutes />
      </AppHOC>
    </>
  );
}

export default App;
