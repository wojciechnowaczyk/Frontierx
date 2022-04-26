import Box from "./Box";
import ButtonsRow from "./ButtonsRow";
import en from "../lozalizations/en.json";

const Content = () => {
  return (
    <div className="flex items-center flex-col">
      <ButtonsRow />
      <div className="grid grid-cols-2 gap-4 ">
        <Box>
          <div>{en.contentTab}</div>
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
