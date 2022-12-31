import React, { useEffect, useState } from "react";
// import CardIcon from "../images/credit-card.svg";
// import ProductImage from "../images/product-image.jpg";
import { loadStripe } from "@stripe/stripe-js";
import { useTheme } from "next-themes";

import { Card, Container, Col, Grid, Image, Text, Button, Row } from "@nextui-org/react";
import { FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiGithubsponsors } from 'react-icons/si';


let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_live_51MFN9EGKJO6noGmdS99CkUEdQQ70nqLXMXLWNVcOWbM39qzkzzmh7eqWKkt0432k9LFnxk7WdPSUFPcLya2mA8bv00hWJuEbRp');
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


  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
	  
	<>
	<Grid.Container >
		<Grid sm={12}>
		<div className={`w-full rounded-lg transition-all ease-out duration-300 ${
		mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50 "
	  } hover:scale-105 link`}
	>
			<Card isHoverable="true" isPressable="true" css={{ mw: "400px" }}>
				<Card.Header>
					<Text size={22} b>{type + ' - Sponsorship'}</Text>
				</Card.Header>

				<Card.Divider />
					<Container >
						<Card.Body css={{ height: '16vw', width: '30vm'}}>
							<Row>
								<Text size={18} i b >Benefits Include: </Text>
							</Row>

							
							<Row>
								<Col><FaDiscord color='MediumBlue' size={20} /> </Col>
								<Col>
									<Text b size={16}>{benefits}</Text>
								</Col>			
							</Row>

								{type == "Premium" && (
									
									<Row>
										<Col> <FaInstagram color='MediumBlue' size={20} /> </Col>
										<Col> <Text b size={16}>Instagram Story and Post </Text> </Col>
									</Row>
								)}

								{type == "Pro" && (
								
									<Row>
										<Col> <FaInstagram color='MediumBlue' size={20} /> </Col>
										<Col> <Text b size={16}>Instagram Story and Post </Text> </Col>
									</Row>
								)}		
							

								{type == "Pro" && (
									
									<Row>
										<Col><FaYoutube color='Firebrick' size={20} /> </Col>
										<Col>
											<Text b size={16}>YouTube Ad - 30 seconds</Text>
										</Col>
										
									</Row>
								)}	

								{/* spot on website */}
								
							<Row>
								<Col><SiGithubsponsors color='Salmon' size={20} /> </Col>
								<Col>
									<Text b size={16}>Custom Ad displayed on site</Text>
								</Col>
							</Row>
						</Card.Body>
					</Container>
				<Card.Divider />
				
				{/* subscribe button $ */}
				<Card.Footer>
					<Row justify="flex-end">
						
						<Button
							color="primary"
							onPress={redirectToCheckout}
							disabled={isLoading}
							className="hover:tracking-wider" 
							style={{ fontSize: 20, color: 'black' }} 
							size="md"
							>{type} 
						</Button>
					</Row>
				</Card.Footer>

					</Card>
				</div>
			</Grid>
		</Grid.Container>
	</>
  );
};

export default Checkout;
