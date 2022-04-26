const Card = ({
  topTitle,
  mainTitle,
  percentage,
  activeCard,
  setActiveCard,
  id,
}) => {
  return (
    <button
      className={`${"bg-[#0D0D0D] w-[165px] h-[99px] rounded-[5px] px-2.5 py-[30px] text-white flex justify-center flex-col items-center"} ${
        activeCard === id ? "border-2 border-redSalsa" : ""
      }`}
      onClick={() => setActiveCard(id)}
    >
      <p className="text-[13px] text-delta">{topTitle}</p>
      <p className="font-extrabold text-[17px]">{mainTitle}</p>
      <p className="text-sm text-delta">{percentage}</p>
    </button>
  );
};

export default Card;
