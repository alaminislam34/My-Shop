import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Categories = () => {
  return (
    <div className="space-y-6">
      <SectionTitle title={"Categories"} />
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-black ">
          Browse By Category
        </h1>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full border flex justify-center items-center cursor-pointer">
            <BiLeftArrow />
          </button>
          <button className="w-10 h-10 rounded-full border flex justify-center items-center cursor-pointer">
            <BiRightArrow />
          </button>
        </div>
      </div>
      <div>
        <button>
          <div>
            <div className="border rounded-lg h-16 w-10 relative">
              <div className="border-t h-5 w-full absolute bottom-0 right-0 flex justify-center items-center">
                <div>--</div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Categories;
