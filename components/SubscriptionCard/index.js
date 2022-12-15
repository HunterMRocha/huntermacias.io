import React from "react";
import { Card, Container, Col, Grid, Image, Text, Button, Row } from "@nextui-org/react";
// import { SiDiscord, SiInstagram, SiYoutube } from "react-icons/Si";
// import { FcLike } from "react-icons/Fc";

const SubscriptionCard = ({ type, price, benefits }) => {
  return (
	<Grid.Container>
		<Grid sm={12}>
			<Card css={{ mw: "400px" }}>
				<Card.Header>
					<Text size={22} color="GoldenRod" b>{type + ' Sponshorship'}</Text>
				</Card.Header>

				<Card.Divider />
					<Container>
						<Card.Body css={{ height: '10vw', width: '30vm'}}>
							<Row>
							<Text size={18} b i >Benfits Include: </Text>
							</Row>

							
							<Row>
								<Col css={{width: "40px"}}> 
								{/* <SiDiscord color='MediumBlue' size={20}/>  */}
								</Col>
								<Col>
									<Text size={16}>{benefits}</Text>
								</Col>
								
							</Row>

							{type == "Premium" && (
								<Row>
									<Col css={{width: "40px"}}>
										 {/* <SiInstagram color='Salmon' size={20}/> */}
										  </Col>
									<Col> <Text size={16}>Instagram Story and Post </Text> </Col>
								</Row>
							)}

							{type == "Pro" && (
								<Row>
									<Col css={{width: "40px"}}> 
									{/* <SiInstagram color='Salmon' size={20}/> */}
									 </Col>
									<Col> <Text size={16}>Instagram Story and Post </Text> </Col>
								</Row>
							)}		
							

							{type == "Pro" && (
								<Row>
									<Col css={{width: "40px"}}>
										 {/* <SiYoutube color='FireBrick' size={20}/> */}
										  </Col>
									<Col>
										<Text size={16}>YouTube Ad - 30 seconds</Text>
									</Col>
									
								</Row>
							)}	

							{/* spot on website */}
							
							<Row>
								<Col css={{width: "40px"}}> 
								{/* <FcLike color='Salmon' size={20}/>  */}
								</Col>
								<Col>
									<Text size={16}>Custom Company Spot on Site</Text>
								</Col>
							</Row>
					

						</Card.Body>
					</Container>
				<Card.Divider />

				<Card.Footer>
					<Row justify="flex-end">
						<Button className="hover:tracking-wider" style={{ fontSize: 20, color: "MistyRose"  }} size="lg">{price} </Button>
					</Row>
				</Card.Footer>

			</Card>
		</Grid>
	</Grid.Container>
  );
};

export default SubscriptionCard;
