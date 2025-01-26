import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <search className="max-w-7xl mx-auto bg-transparent">
        <Outlet />
      </search>
    </div>
  );
};

export default Main;
