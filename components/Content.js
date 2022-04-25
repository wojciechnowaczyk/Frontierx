import Box from "./Box";
import ButtonsRow from "./ButtonsRow";

const Content = () => {
  return (
    <div>
      <ButtonsRow />
      <div className="grid grid-cols-2 gap-4 ">
        <Box>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
            mi ut luctus blandit. Maecenas rutrum mollis sem ac varius. Mauris
            vestibulum tortor eget sem egestas, sit amet pharetra erat
            tincidunt. Donec et rhoncus felis, at efficitur dui. Sed sit amet
            augue volutpat turpis euismod luctus. Phasellus fermentum risus a
            massa elementum, eu elementum lacus laoreet.
          </div>
        </Box>
        <Box>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
            mi ut luctus blandit. Maecenas rutrum mollis sem ac varius. Mauris
            vestibulum tortor eget sem egestas, sit amet pharetra erat
            tincidunt. Donec et rhoncus felis, at efficitur dui. Sed sit amet
            augue volutpat turpis euismod luctus. Phasellus fermentum risus a
            massa elementum, eu elementum lacus laoreet.
          </div>
        </Box>
        <div className="col-span-1" />
        <Box>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
            mi ut luctus blandit. Maecenas rutrum mollis sem ac varius. Mauris
            vestibulum tortor eget sem egestas, sit amet pharetra erat
            tincidunt. Donec et rhoncus felis, at efficitur dui. Sed sit amet
            augue volutpat turpis euismod luctus. Phasellus fermentum risus a
            massa elementum, eu elementum lacus laoreet.
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Content;
