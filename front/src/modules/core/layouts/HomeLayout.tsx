import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="grid place-items-center mt-11">
      <Outlet />
    </div>
  );
};

export default HomeLayout;
