import React, { useEffect, useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { useTheme } from "next-themes";

import { Card, Container, Col, Grid, Text, Button, Row } from "@nextui-org/react";
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
			<Card 
			className={`w-full rounded-lg mob:text-xs transition-all ease-out duration-300 ${
				mounted && theme === "dark" ? "hover:bg-slate-600" : "hover:bg-slate-50 "
			  } `}
			isHoverable="true" isPressable="true" css={{ mw: "400px"}}>
				<Card.Header >
					<Text 
						size={22} b>{type + ' - Sponsorship'}</Text>
				</Card.Header>

				<Card.Divider />
					<Container >
						<Card.Body css={{ height: '16vw', width: '30vm'}}>
							<Row>
								<Text  size={18} i b >Benefits Include: </Text>
							</Row>

							
							<Row>
								<div className="pt-2 grid grid-rows grid-flow-col gap-4">
									<Col className='row-span-3'><FaDiscord color='MediumBlue' size={20} /> </Col>
									<Col className='row-span-2 col-span-2'>
										<Text color="success" b size={14}>{benefits}</Text>
									</Col>			

								</div>
							</Row>

								{type == "Premium" && (
									<Row>
										<div className="grid grid-rows grid-flow-col gap-4">
											<Col className='row-span-3'> <FaInstagram color='MediumBlue' size={20} /> </Col>
											<Col className='row-span-2 col-span-2'> <Text color="success" b size={14}>Instagram Story and Post </Text> </Col>
										</div>
									</Row>

								)}

								{type == "Pro" && (
									<Row>
										<div className="grid grid-rows grid-flow-col gap-4">
											<Col className='row-span-3'> <FaInstagram color='MediumBlue' size={20} /> </Col>
											<Col className='row-span-3 col-span-2'> <Text color="success" b size={14}>Instagram Story and Post </Text> </Col>
										</div>
									</Row>
								)}		
							

								{type == "Pro" && (
									
									<Row>
										<div className="grid grid-rows grid-flow-col gap-4">
											<Col className='row-span-3'><FaYoutube color='Firebrick' size={20} /> </Col>
											<Col className='row-span-3 col-span-2'>
												<Text color="success" b size={14}>YouTube Ad - 30 seconds</Text>
											</Col>
										</div>
										
									</Row>
								)}	

								{/* spot on website */}
								
							<Row>
							<div className="grid grid-rows grid-flow-col gap-4">
								<Col className='row-span-3'><SiGithubsponsors color='Salmon' size={20} /> </Col>
								<Col className='row-span-3 col-span-2'>
									<Text color="success" b size={14}>Custom Ad displayed on site</Text>
								</Col>
							</div>
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
