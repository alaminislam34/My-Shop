import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavTop from "../Pages/Shared/NavTop/NavTop";
import NavBar from "../Pages/Shared/Navbar/NavBar";

const Main = () => {
  return (
    <div>
      <NavTop />
      <NavBar />
      <search className="max-w-7xl mx-auto min-h-screen">
        <Outlet />
      </search>
      <Footer />
    </div>
  );
};

export default Main;
