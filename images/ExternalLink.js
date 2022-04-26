const ExternalLink = ({ width = 23, height = 23 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 23 23"
      role="img"
    >
      <title id="ExternalLink">External Link</title>
      <path
        fill="#F3F3F3"
        d="M9.143 4.286v2.428H3.07v13.357H16.43V14h2.428v7.286a1.215 1.215 0 01-1.214 1.214H1.857a1.214 1.214 0 01-1.214-1.214V5.5a1.214 1.214 0 011.214-1.214h7.286zM22.5.643v9.714h-2.428v-5.57l-9.463 9.464-1.717-1.717 9.461-9.463h-5.567V.643H22.5z"
      ></path>
    </svg>
  );
};

export default ExternalLink;
