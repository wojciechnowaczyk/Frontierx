import { useState } from "react";
import ButtonsRow from "./ButtonsRow";
import Tab1Content from "./TabsSection/Tab1Content";
import Tab2Content from "./TabsSection/Tab2Content";
import Tab3Content from "./TabsSection/Tab3Content";

const Content = () => {
  const [activeTab, setActiveTab] = useState("Tab1");
  return (
    <div className="flex items-center flex-col">
      <ButtonsRow activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Tab1" && <Tab1Content />}
      {activeTab === "Tab2" && <Tab2Content />}
      {activeTab === "Tab3" && <Tab3Content />}
    </div>
  );
};

export default Content;
