import React from "react";
import { Card, Container, Col, Grid, Image, Text, Button, Row } from "@nextui-org/react";
// import { useSession, signIn, signOut } from "next-auth"
// import { SiDiscord, SiInstagram, SiYoutube } from "react-icons/Si";
// import { FcLike } from "react-icons/Fc";

import { loadStripe } from "@stripe/stripe-js";
// import axios from 'axios';
// const stripePromise = loadStripe(process.env.stripe_test_key);



// const createCheckoutSession = async () => {
// 	const stripe = await stripePromise; 

// 	// call backend to create a checkout session 
// 	const checkoutSession = await axios.post("../../pages/api/create-checkout-session", 
// 	{
// 		items:[{"sub":33}],
// 	})
// };


const SubscriptionCard = ({ type, price, benefits }) => {
  return (
	<Grid.Container>
		<Grid sm={12}>
			<Card isHoverable="true" isPressable="true" css={{ backgroundColor: "#1F2937", mw: "400px" }}>
				<Card.Header>
					<Text size={22} color="#EF4444" b>{type + ' - Sponsorship'}</Text>
				</Card.Header>

				<Card.Divider />
					<Container>
						<Card.Body css={{ height: '16vw', width: '30vm'}}>
							<Row>
							<Text color="#EF4444" size={18} i b >Benefits Include: </Text>
							</Row>

							
							<Row>
								<Col css={{width: "40px"}}> 
								{/* <SiDiscord color='MediumBlue' size={20}/>  */}
								</Col>
								<Col>
									<Text color="#38BDF8" b size={16}>{benefits}</Text>
								</Col>
								
							</Row>

							{type == "Premium" && (
								<Row>
									<Col css={{width: "40px"}}>
										 {/* <SiInstagram color='Salmon' size={20}/> */}
										  </Col>
									<Col> <Text b color="#F472B6" size={16}>Instagram Story and Post </Text> </Col>
								</Row>
							)}

							{type == "Pro" && (
								<Row>
									<Col css={{width: "40px"}}> 
									{/* <SiInstagram color='Salmon' size={20}/> */}
									 </Col>
									<Col> <Text b color="#F472B6" size={16}>Instagram Story and Post </Text> </Col>
								</Row>
							)}		
							

							{type == "Pro" && (
								<Row>
									<Col css={{width: "40px"}}>
										 {/* <SiYoutube color='FireBrick' size={20}/> */}
										  </Col>
									<Col>
										<Text b color="#E11D48" size={16}>YouTube Ad - 30 seconds</Text>
									</Col>
									
								</Row>
							)}	

							{/* spot on website */}
							
							<Row>
								<Col css={{width: "40px"}}> 
								{/* <FcLike color='Salmon' size={20}/>  */}
								</Col>
								<Col>
									<Text b color="#EAB308" size={16}>Custom Ad displayed on site</Text>
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
