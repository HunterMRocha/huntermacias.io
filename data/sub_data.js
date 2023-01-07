/* eslint-disable import/no-anonymous-default-export */
export default [
	{
	  type: 'Basic',
	  price: process.env.BASIC_SUB_PRICE_KEY,
	  benefits: "Discord Server Access+"
	  
	},

	{
		type: 'Premium',
		price: process.env.PREM_SUB_PRICE_KEY,
		benefits: "Discord Server Access+"

	},

	{
		type: 'Pro',
		price: process.env.PRO_SUB_PRICE_KEY,
		benefits: "Discord Server Access+"
	}
	
  ]