import { Card, Col, Row, Button, Link, Text } from "@nextui-org/react";
// import YoutubeComponent from "../YouTubeComponent/YoutubeComponent";
import YouTube from "react-youtube";


const opts = {
    playerVars: {
      width: "100%",
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      rel: 0
    }
  };




export const VideoCard = ({ title, videoLink, codeLink, videoId }) => (
    
  <Card>
    <Card.Body className="bg-emerald-800/20">
        <div className="flex">
            <YouTube
                containerClassName="video-container"
                // className="iframe"
                videoId={videoId}
                rel="0"
                opts={opts}
                />
            );    
        </div>

        <div>
            <h2 className="p-5">Content Overview</h2>
            <p className="pl-5">Throughout this section you will learn how to...</p>
        </div>
      
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "relative",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
              <Card.Image
                src="https://i.imgur.com/28Xh6rL.jpeg"
                css={{ bg: "black", br: "50%" }}
                height={50}
                width={50}
                alt="pygame dev"
              />
            </Col>
            <Col css={{ pl: "10px" }}>
              <Text color="#94f9f0" size={24}>
                {title}
              </Text>
              <Text color="#94f9f0" size={12}>
                Learn python by building multiple games using the PyGame
                library.
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <a href={videoLink} target="_blank" rel="noreferrer">
              <div>
                <Button
                  flat
                  auto
                  rounded-lg
                  css={{ color: "#94f9f0", bg: "#94f9f026" }}
                >
                  <Text
                    css={{ color: "inherit" }}
                    size={14}
                    weight="bold"
                    transform="uppercase"
                  >
                    Watch Video
                  </Text>
                </Button>
              </div>
            </a>
          </Row>

          <Row justify="flex-end">
            <a href={codeLink} target="_blank" rel="noreferrer">
              <div>
                <Button
                  flat
                  auto
                  rounded
                  size="xs"
                  css={{ color: "#94f9f0", bg: "#94f9f026", m: "10px" }}
                >
                  <Text
                    css={{ color: "inherit" }}
                    size={14}
                    transform="uppercase"
                  >
                    Code Along
                  </Text>
                </Button>
              </div>
            </a>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
