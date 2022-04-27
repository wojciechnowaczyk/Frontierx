import { useState } from "react";
import Box from "../Box";
import en from "../../lozalizations/en.json";
import IconHyperlink from "../../components/IconHyperlink";
import InstagramLogotype from "../../images/InstagramLogotype";
import ExternalLink from "../../images/ExternalLink";
import TwitchLogotype from "../../images/TwitchLogotype";
import TwitterLogotype from "../../images/TwitterLogotype";
import Card from "../Card";
import Tab2Icon from "../../images/Tab2Icon";

const Tab2Content = () => {
  const [activeCard, setActiveCard] = useState("");
  return (
    <div className="grid max-w-[40%] sm:max-w-full grid-cols-1 xl:grid-cols-2  gap-4">
      <Box icon={<Tab2Icon />}>
        <div className="pr-[92px]">
          <p>{en.contentTab}</p>
          <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-4 mt-[42px]">
            <IconHyperlink title="LoremIpsum.com" icon={<ExternalLink />} />
            <IconHyperlink title="@Loremipsum" icon={<TwitchLogotype />} />
            <IconHyperlink title="@Loremipsum" icon={<InstagramLogotype />} />
            <IconHyperlink title="@Loremipsum" icon={<TwitterLogotype />} />
          </div>
        </div>
      </Box>
      <Box icon={<Tab2Icon />} isTooltip>
        <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 h-[317px] overflow-y-auto pr-[19px] mr-[24px] scrollbar scrollbar-thin">
          <Card
            topTitle="Accessories & Ears"
            mainTitle="Lorem ipsum"
            percentage="9%"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            id="Card1"
          />
          <Card
            topTitle="Accessories & Ears"
            mainTitle="Lorem ipsum"
            percentage="9%"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            id="Card2"
          />
          <Card
            topTitle="Accessories & Ears"
            mainTitle="Lorem ipsum"
            percentage="9%"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            id="Card3"
          />
          <Card
            topTitle="Accessories & Ears"
            mainTitle="Lorem ipsum"
            percentage="9%"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            id="Card4"
          />
          <Card
            topTitle="Accessories & Ears"
            mainTitle="Lorem ipsum"
            percentage="9%"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            id="Card5"
          />
          <Card
            topTitle="Accessories & Ears"
            mainTitle="Lorem ipsum"
            percentage="9%"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            id="Card6"
          />
          <Card
            topTitle="Accessories & Ears"
            mainTitle="Lorem ipsum"
            percentage="9%"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            id="Card7"
          />
          <Card
            topTitle="Accessories & Ears"
            mainTitle="Lorem ipsum"
            percentage="9%"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            id="Card8"
          />
          <Card
            topTitle="Accessories & Ears"
            mainTitle="Lorem ipsum"
            percentage="9%"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            id="Card9"
          />
          <Card
            topTitle="Accessories & Ears"
            mainTitle="Lorem ipsum"
            percentage="9%"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            id="Card10"
          />
          <Card
            topTitle="Accessories & Ears"
            mainTitle="Lorem ipsum"
            percentage="9%"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            id="Card11"
          />
          <Card
            topTitle="Accessories & Ears"
            mainTitle="Lorem ipsum"
            percentage="9%"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            id="Card12"
          />
        </div>
      </Box>
      <div className="col-span-1" />
      <Box icon={<Tab2Icon />}>
        <div className="pr-[92px]">{en.contentTab}</div>
      </Box>
    </div>
  );
};

export default Tab2Content;
