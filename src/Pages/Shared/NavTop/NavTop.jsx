import { Link } from "react-router-dom";

const NavTop = () => {
  return (
    <div className="text-center bg-black text-white text-xs py-3">
      <p>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <Link className="underline ml-4"> Shop Now</Link>
      </p>
    </div>
  );
};

export default NavTop;
