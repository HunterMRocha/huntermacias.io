import { Card, Col, Row, Button, Link, Text } from "@nextui-org/react";
import YouTube from "react-youtube";
import MediaQuery from 'react-responsive'

const opts = {
    playerVars: {
      width: "100%",
      height: "100%",
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      rel: 0
    }
  };

export const VideoCard = ({ title, videoLink, codeLink, videoId }) => (
  <Card
    css={{ mw: "675px" }}>
      <Card.Body className=" bg-emerald-800/20 ">
          <div className="flex mb-10 w-16 h-80">
              <YouTube
                  aria-label="youtube video"
                  containerClassName="video-container"
                  className="iframe"
                  videoId={videoId}
                  rel="0"
                  opts={opts}
                  />  
          </div>
      
      
      </Card.Body>
    <Card.Footer
      className="relative mob:absolute"
      isBlurred
      css={{
        // position: "relative",
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
                #python #react #codingbits #pandabits
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
