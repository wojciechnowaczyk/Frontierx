export const HorizontalLogotype = ({
  width = 195,
  height = 23,
  color = "#FFFFFF",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 195 23"
    >
      <path fill="url(#pattern0)" d="M0 0H195V23H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
          fill={color}
        >
          <use
            transform="matrix(.00394 0 0 .03338 0 0)"
            xlinkHref="#image0_0_124"
          ></use>
        </pattern>
        <image
          id="image0_0_124"
          width="254"
          height="30"
          fill={color}
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
};

export const GreyLogotype = ({ width = 195, height = 23 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 195 23"
    >
      <path fill="url(#pattern0)" fillOpacity="0.3" d="M0 0H195V23H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.00394 0 0 .03338 0 0)"
            xlinkHref="#image0_0_117"
          ></use>
        </pattern>
        <image
          id="image0_0_117"
          width="254"
          height="30"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
};
