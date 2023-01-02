import { Card, Col, Row, Button, Link, Text } from "@nextui-org/react";
// import YoutubeComponent from "../YouTubeComponent/YoutubeComponent";
import YouTube from "react-youtube";
import MediaQuery from 'react-responsive'


const opts = {
    playerVars: {
      width: "100%",
      height: "50%",
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      rel: 0
    }
  };


export const VideoCard = ({ title, videoLink, codeLink, videoId }) => (
    
  <Card>
    <Card.Body className=" bg-emerald-800/20 ">
        <div className="flex mb-10 w-16 h-80">
            <YouTube
                containerClassName="video-container mob:content-start"
                className="iframe"
                videoId={videoId}
                // width="60" height="315"
                rel="0"
                opts={opts}
                />  
        </div>

  
        {/* <div> */}
          {/* <MediaQuery minWidth={1424}> */}
            {/* <h2 className="p-5 pt-5">Content Overview</h2>
            <p className="pl-5">Throughout this section you will learn how to...</p> */}
          {/* </MediaQuery>  */}
            {/* <h2 className="p-5">Content Overview</h2>
            <p className="pl-5">Throughout this section you will learn how to...</p> */}
        {/* </div> */}
      
      
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
            <MediaQuery minWidth={765}>
              <Card.Image
                src="https://i.imgur.com/28Xh6rL.jpeg"
                css={{ bg: "black", br: "50%" }}
                height={50}
                width={50}
                alt="pygame dev"
              />
            </MediaQuery>
            </Col>
            <Col css={{ m: '5px', pl: "10px" }}>
              <MediaQuery minWidth={765}>
                <Text color="#94f9f0" size={18}>
                  {title}
                </Text>
              </MediaQuery>

            <Text color="#94f9f0" size={10}>
                Learn python by building multiple games using the PyGame
                library.
              </Text>
            
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex">
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
                    size={12}
                    weight="semi-bold"
                    transform="uppercase"
                  >
                    Watch Video
                  </Text>
                </Button>
              </div>
            </a>
          </Row>

          <Row justify="flex">
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
