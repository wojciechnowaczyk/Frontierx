import { HorizontalLogotype } from "../images/HorizontalLogotype";
import MagnifyingGlass from "../images/MagnifyingGlass";
import en from "../lozalizations/en.json";

const MenuItem = ({ title, marginLeft }) => {
  return (
    <a
      href=""
      className={`${"text-white text-base font-extrabold"} ${marginLeft}`}
    >
      {title}
    </a>
  );
};

const Menu = () => {
  return (
    <div className="w-full h-24 bg-black items-center flex px-10 py-6">
      <div className="w-48">
        <HorizontalLogotype />
      </div>
      <div className="ml-56 bg-gray-dark h-11 rounded-lg px-5 py-3.5 flex w-screen">
        <MagnifyingGlass />
        <input
          className="text-white 5 outline-0 bg-gray-dark ml-5 text-sm text-gray w-full"
          placeholder={en.searchPlaceholder}
        />
      </div>
      <MenuItem title={en.menuItem} marginLeft="ml-10" />
      <MenuItem title={en.menuItem} marginLeft="ml-14" />
      <MenuItem title={en.menuItem} marginLeft="ml-9" />
    </div>
  );
};

export default Menu;
