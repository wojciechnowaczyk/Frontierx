import { useState } from "react";
import Box from "./Box";
import ButtonsRow from "./ButtonsRow";
import en from "../lozalizations/en.json";
import IconHyperlink from "../components/IconHyperlink";
import InstagramLogotype from "../images/InstagramLogotype";
import ExternalLink from "../images/ExternalLink";
import TwitchLogotype from "../images/TwitchLogotype";
import TwitterLogotype from "../images/TwitterLogotype";

const Content = () => {
  const [activeTab, setActiveTab] = useState("Tab1");
  return (
    <div className="flex items-center flex-col">
      <ButtonsRow activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="grid grid-cols-2 gap-4 ">
        <Box>
          <div>
            {en.contentTab}
            <div className="grid grid-cols-2 gap-4 mt-[42px]">
              <IconHyperlink title="LoremIpsum.com" icon={<ExternalLink />} />
              <IconHyperlink title="@Loremipsum" icon={<InstagramLogotype />} />
              <IconHyperlink title="@Loremipsum" icon={<TwitchLogotype />} />
              <IconHyperlink title="@Loremipsum" icon={<TwitterLogotype />} />
            </div>
          </div>
        </Box>
        <Box>
          <div>{en.contentTab}</div>
        </Box>
        <div className="col-span-1" />
        <Box>
          <div>{en.contentTab}</div>
        </Box>
      </div>
    </div>
  );
};

export default Content;
