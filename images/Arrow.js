const Arrow = ({ width = 12, height = 8 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 12 8"
    >
      <path
        fill="#fff"
        d="M5.886 4.579L10.465 0l1.308 1.308-5.887 5.886L0 1.308 1.308 0l4.578 4.579z"
      ></path>
    </svg>
  );
};

export default Arrow;
