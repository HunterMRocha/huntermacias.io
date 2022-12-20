import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import SubscriptionCard from "../components/SubscriptionCard";
import Checkout from "../components/Checkout"
import { Card, Container, Row, Col, Text} from '@nextui-org/react';
import FeaturedSponsors from "../components/FeaturedSponsors";

import { Table, Tooltip, User } from "@nextui-org/react";


// Local Data
import data from "../data/portfolio.json";
import subdata from "../data/sub_data"
import { useTheme } from "next-themes";

// import ReactGA from "react-ga"

export default function Home() {


  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // google analytics 
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname);
  // }); 
 
  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  const { theme } = useTheme();
  const [mounted, setMounted] = useState();
  useEffect(() => {
    setMounted(true);
  }, []);



  return (    
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>
      

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5 mob:w-full text-2xl tablet:p-2 p-1 px-2">
            
            <h1
              ref={textOne}
              className=" laptop:text-5xl w-full text-bold tablet:text-4xl mob:text-xl mob:text-center w-4/5 laptop:w-5/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="laptop:text-3xl w-full py-2 px-2 mob:text-lg laptop:w-5/5 mob:py-1 mob:text-center"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="laptop:text-2xl w-full py-2 px-2 mob:text-lg laptop:w-5/5 px-2 mob:text-center mob:py-1"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="laptop:text-xl w-full px-2 py-1 mob:text-sm laptop:w-5/5 mob:text-center"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
            </div>
              <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
              {/* <h1 className="text-2xl text-bold">What I Enjoy </h1> */}

          <h1 className="tablet:m-2 text-4xl text-bold text-center">Projects</h1>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-2 text-4xl text-bold text-center">Teaching Services</h1>
          <div className="mt-5 tablet:m-8 grid grid-cols-1 laptop:grid-cols-2 gap-8">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
                price={service.price}
              />
            ))}
          </div>
        </div>

          {/* subscriptions services */}
        <div className={`mt-10 laptop:mt-30 laptop:p-2 rounded ${
                theme === "dark" ? "bg-slate-900" : "bg-white"
              } shadow-md rounded-md`}>
          <h1 className="tablet:m-2 text-4xl text-bold text-center ">Become A Sponsor - Coming Soon ! </h1>
          <Container>
            
              <div 
              className="mt-5 mob:min-h-full mob:mb-14 mob:grid-cols-1 mob:gap-y-10 tablet:m-8 grid tablet:grid-cols-2 
                        laptop:justify-center laptop:grid-cols-3 gap-8"
              > 
                {subdata.map((type, index) => (
                    <Checkout 
                      key={index}
                      type={type.type}
                      price={type.price}
                      benefits={type.benefits}
                    />
                ))}
              </div>
            
          </Container>
 
        </div>
          <FeaturedSponsors className='pt-4' />

        {/* <div>
            <Checkout />
        </div> */}

        
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-2 text-4xl text-bold">About</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-4/5 pb-20">
            {data.aboutpara}
          </p>
        </div>

      


        {/* <Header /> */}

        
      </div>
    </div>
  );
}
