import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <search className="max-w-7xl mx-auto bg-transparent">
        <Outlet />
      </search>
      <Footer />
    </div>
  );
};

export default Main;
