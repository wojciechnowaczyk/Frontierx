import { useState } from "react";
import Box from "../Box";
import en from "../../lozalizations/en.json";
import IconHyperlink from "../../components/IconHyperlink";
import InstagramLogotype from "../../images/InstagramLogotype";
import ExternalLink from "../../images/ExternalLink";
import TwitchLogotype from "../../images/TwitchLogotype";
import TwitterLogotype from "../../images/TwitterLogotype";
import Card from "../Card";
import Tab1Icon from "../../images/Tab1Icon";

const Tab1Content = () => {
  const [activeCard, setActiveCard] = useState("");
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <Box icon={<Tab1Icon />}>
        <div className="pr-[92px]">
          {en.contentTab}
          <div className="grid grid-cols-2 gap-4 mt-[42px]">
            <IconHyperlink title="LoremIpsum.com" icon={<ExternalLink />} />
            <IconHyperlink title="@Loremipsum" icon={<InstagramLogotype />} />
            <IconHyperlink title="@Loremipsum" icon={<TwitchLogotype />} />
            <IconHyperlink title="@Loremipsum" icon={<TwitterLogotype />} />
          </div>
        </div>
      </Box>
      <Box icon={<Tab1Icon />}>
        <div className="grid grid-cols-3 gap-4 h-[317px] overflow-y-auto pr-[19px] mr-[24px]">
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
      <Box icon={<Tab1Icon />}>
        <div className="pr-[92px]">{en.contentTab}</div>
      </Box>
    </div>
  );
};

export default Tab1Content;
