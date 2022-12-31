import YouTube from "react-youtube";

const YoutubeComponent = ({ videoId }) => {
  const opts = {
    playerVars: {
      width: "100%",
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      rel: 0
    }
  };
  return (
    <YouTube
      containerClassName="video-container"
      // className="iframe"
      videoId={videoId}
      rel="0"
      opts={opts}
    />
  );
};
export default YoutubeComponent;
