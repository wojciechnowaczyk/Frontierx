const TwitchLogotype = ({ width = 24, height = 18 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 18"
      role="img"
    >
      <title id="TwitchLogotype">Twitch logotype</title>
      <path
        fill="#F3F3F3"
        d="M14.365 15.176c.316-.06.63-.127.943-.203l1.961 2.207c4.428-.144 6.132-3.109 6.132-3.109 0-6.585-2.887-11.922-2.887-11.922C17.632-.061 14.885 0 14.885 0l-.86 1.023a16.609 16.609 0 00-4.508-.02 2.18 2.18 0 00-.218.02L8.514 0s-2.745-.06-5.63 2.147C2.885 2.147 0 7.486 0 14.07c0 0 1.683 2.967 6.11 3.109l1.794-2.332c.548.146.972.25 1.272.308a13.75 13.75 0 005.19.02z"
      ></path>
      <circle cx="7.791" cy="9.739" r="1.948" fill="#2A2A2A"></circle>
      <circle cx="15.582" cy="9.739" r="1.948" fill="#2A2A2A"></circle>
    </svg>
  );
};

export default TwitchLogotype;
