import React from "react";
import { Card, Container, Col, Grid, Image, Text, Button, Row } from "@nextui-org/react";

// import { SiDiscord, SiInstagram, SiYoutube } from "react-icons/Si";
// import { FcLike } from "react-icons/Fc";


const SubscriptionCard = ({ type, price, benefits }) => {
  return (
	<Grid.Container>
		<Grid sm={12}>
			<Card isHoverable="true" isPressable="true" css={{mw: "400px" }}>
				<Card.Header>
					<Text size={22} b>{type + ' - Sponsorship'}</Text>
				</Card.Header>

				<Card.Divider />
					<Container>
						<Card.Body css={{ height: '16vw', width: '30vm',}}>
							<Row>
							<Text size={18} i b >Benefits Include: </Text>
							</Row>

							
							<Row>
								<Col > 
								<SiDiscord color='MediumBlue' size={20}/> 
								</Col>
								<Col>
									<Text b size={16}>{benefits}</Text>
								</Col>
								
							</Row>

							{type == "Premium" && (
								<Row>
									<Col >
										 {/* <SiInstagram color='Salmon' size={20}/> */}
										  </Col>
									<Col> <Text b size={16}>Instagram Story and Post </Text> </Col>
								</Row>
							)}

							{type == "Pro" && (
								<Row>
									<Col > 
									{/* <SiInstagram color='Salmon' size={20}/> */}
									 </Col>
									<Col> <Text b size={16}>Instagram Story and Post </Text> </Col>
								</Row>
							)}		
							

							{type == "Pro" && (
								<Row>
									<Col >
										 {/* <SiYoutube color='FireBrick' size={20}/> */}
															  
									</Col>
									<Col>
										<Text b size={16}>YouTube Ad - 30 seconds</Text>
									</Col>
									
								</Row>
							)}	

							{/* spot on website */}
							<Row>
								<Col> 
								{/* <FcLike color='Salmon' size={20}/>  */}
								</Col>
								<Col>
									<Text b size={6}>Custom Ad displayed on site</Text>
								</Col>
							</Row>
					

						</Card.Body>
					</Container>
				<Card.Divider />
				
				{/* subscribe button $ */}
				<Card.Footer>
					<Row justify="flex-end">
						<Button 
							role='link' 		
							className="hover:tracking-wider" 
							style={{ fontSize: 20, color: "MistyRose" }} 
							size="lg"
							>{price} 
						</Button>
					</Row>
				</Card.Footer>

			</Card>
		</Grid>
	</Grid.Container>
  );
};

export default SubscriptionCard;
