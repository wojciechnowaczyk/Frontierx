const IconHyperlink = ({ title, icon }) => {
  return (
    <a
      href=""
      className="flex flex-row text-white font-normal text-sm items-center mb-[23.5px] hover:text-redSalsa"
    >
      <div className="w-6">{icon}</div>
      <p className="ml-[15.5px]">{title}</p>
    </a>
  );
};

export default IconHyperlink;
