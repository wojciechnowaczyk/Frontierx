import { useState } from "react";
import en from "../lozalizations/en.json";
import Tab1Icon from "../images/Tab1Icon";
import Tab2Icon from "../images/Tab2Icon";
import Tab3Icon from "../images/Tab3Icon";

const ButtonsRow = () => {
  const [activeTab, setActiveTab] = useState("Tab1");
  const Tab = ({ active = false, id, children }) => {
    return (
      <button
        onClick={() => setActiveTab(id)}
        className={`justify-center items-center py-4 px-8 w-[11.5rem] h-[3.125] flex text-white rounded-[5px] ${
          activeTab === id ? "bg-codGray" : "bg-codGrayInActive"
        }`}
      >
        {children}
      </button>
    );
  };
  return (
    <div className="flex justify-between flex-row w-[592px] mb-[74px]">
      <Tab id="Tab1">
        <Tab1Icon />
        <p className="ml-1.5">{en.tabTitle}</p>
      </Tab>
      <Tab id="Tab2">
        <Tab2Icon />
        <p className="ml-1.5">{en.tabTitle}</p>
      </Tab>
      <Tab id="Tab3">
        <Tab3Icon />
        <p className="ml-1.5">{en.tabTitle}</p>
      </Tab>
    </div>
  );
};

export default ButtonsRow;
