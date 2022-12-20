import React, { useState } from "react";
// import CardIcon from "../images/credit-card.svg";
// import ProductImage from "../images/product-image.jpg";
import { loadStripe } from "@stripe/stripe-js";


import { Card, Container, Col, Grid, Image, Text, Button, Row } from "@nextui-org/react";



let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51MFN9EGKJO6noGmdAmWtYT6MzBPeiR9ztsFzgzH1EpYMV7e5zReClQKaJC33rZo7T8ZSHBOzGssXfkUPj8YnVUbd00sPwWdWvo');
  }
  return stripePromise;
};

const Checkout = ({ type, price, benefits }) => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);


  const item = {
    price: price,
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: 'https://www.huntermacias.io',
    cancelUrl: 'https://www.huntermacias.io'
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectedToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);

    console.log("Stripe Checkout error", error);
    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
	<>
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
							onClick={redirectToCheckout}
							disabled={isLoading}
							className="hover:tracking-wider" 
							style={{ fontSize: 20, color: "MistyRose" }} 
							size="lg"
							>{type} 
						</Button>
					</Row>
				</Card.Footer>

			</Card>
		</Grid>
	</Grid.Container>
	</>
  );
};

export default Checkout;
