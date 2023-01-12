import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import Footer from "../components/Footer";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";

import Head from "next/head";
import Cursor from "../components/Cursor";
import Checkout from "../components/Checkout"
import { Container } from '@nextui-org/react';
import FeaturedSponsors from "../components/FeaturedSponsors";
// import { Image } from "@nextui-org/react";
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import ThumbDownIcon from '@material-ui/icons/ThumbDown';
// import Button from '@material-ui/core/Button';

import Carousel from "react-material-ui-carousel";
// import MetaTags from 'react-meta-tags';

// Local Data
import data from "../data/portfolio.json";
import subdata from "../data/sub_data"
import viddata from "../data/vid-data"
import { useTheme } from "next-themes";
import { VideoCard } from "../components/VideoCard/VideoCard";

// import ReactGA from "react-ga"

// const TRACKING_ID = "G-9PRNXT5E94"
// ReactGA.initialize(TRACKING_ID);
// ReactGA.pageview(window.location.pathname + window.location.search); 



export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // const [countUp, setCountUp] = useState(231)
  // const [countDown, setCountDown] = useState(4)

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
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);

    // ReactGA.pageview(window.location.pathname);
    
  }, []);

  return (    
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>My Personal Tech Hub</title>
        {/* <html lang="en" /> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@huntermacias-io" />
        <meta name="twitter:creator" content="@HunterMacias" />
        <meta name="twitter:title" content="My Personal Tech Hub 🐼" />
        <meta name="twitter:description" content="Freelance Developer - Welcome to my personal portfolio. I post content on programming and different topics in the tech world. I also offer different sponsorship services that you can check out below.  " />
        <meta name="twitter:image" content="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.imgur.com%2FGQ3MeQHh.jpg" /> 
        <meta name="twitter:widgets:new-embed-design" content="on" />
        <meta name="twitter:widgets:csp" content="on" />
       
        <meta property="og:url" content="http://huntermacias.io" />
        <meta property="og:title" content="My Personal Tech Hub" />
        <meta property="og:description" content="Freelance Developer - Welcome to my personal portfolio. I post content on programming and related topics in the tech world. I am looking for mentors and sponsors to team up with  " />
        <meta property="og:image" content="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.imgur.com%2FGQ3MeQHh.jpg"/>
      </Head>

    <div className="gradient-circle"></div>
    <div className="gradient-circle-bottom"></div>

    <div className="container mx-auto mb-10">
    <Header
      handleWorkScroll={handleWorkScroll}
      handleAboutScroll={handleAboutScroll}
    />
    
    <div className="laptop:mt-20 mt-10">
      <div className="mt-5 text-center mob:w-full mob:text-sm tablet:p-2 tablet:text-xl laptop:text-3xl p-1 px-2">
    
        <h1 ref={textOne} className="">
          {data.headerTaglineOne}
        </h1>

        <h2 ref={textTwo} className="">
          {data.headerTaglineTwo}
        </h2>

        <h2 ref={textThree} className="">
          {data.headerTaglineThree}
        </h2>

        <h2 ref={textFour} className="">
          {data.headerTaglineFour}
        </h2>
      </div>

      <hr
        style={{
          background: 'lime',
          color: 'lime',
          borderColor: 'lime',
          height: '1px',
        }}
      />
      
      <Socials className="mob:pl-5 mt-2 laptop:mt-5" />

      
        </div>
          <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          {/* <h2 className="text-2xl text-bold">What I Enjoy </h2> */}

      <div className="mob:w-full flex flex-start text-4xl text-bold space-x-4 tablet:m-2">
        <h2>Projects</h2>
      </div>
      
      <div className="mt-5 grid grid-cols-1 gap-4 tablet:grid-cols-2 laptop:mt-10 laptop:grid-cols-4">
        {data.projects.map((project) => (
          true ? (
            <WorkCard
            key={project.id}
            img={project.imageSrc}
            name={project.title}
            description={project.description}
            modalDescription={project.modalDescription}
            url={project.url}
            />
            ) :
            project.category.includes(selected.currentKey) ? (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                modalDescription={project.modalDescription}
                url={project.url}
              />
              ) : null
              ))}
      </div>
    </div>
    

    <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
    {/* <iframe  width="100%" height="500px" src="https://replit.com/@hunter-macias/gamedev-asteroids#shmup?embed=true"></iframe> */}
      <h2 className="tablet:m-2 text-4xl text-bold text-center">Contact for Tutoring</h2>
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
            theme === "dark" ? "bg-[#171717]" : "bg-white"
          } shadow-sm rounded-md`}>
      <h2 className="tablet:m-2 text-4xl text-bold text-center ">Become A Sponsor - Now Available ! </h2>
      <Container>
          <div 
          className="mt-5 mob:min-h-full mob:mb-14 mob:grid-cols-1 mob:gap-y-10 tablet:m-8 grid tablet:grid-cols-2 
                    laptop:justify-center laptop:grid-cols-3 gap-8"> 
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

    <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
      <h2 className="tablet:m-2 text-4xl text-bold">Free Coding Videos</h2>
        <Carousel>
          {viddata.map((data, id) => (
            <VideoCard
              key={id}
              title={data.title}
              videoLink={data.videoLink}
              codeLink={data.codeLink}
              videoId={data.videoId}
            /> 
          ))}

        
        </Carousel>      
    </div>
    {/* This button should not go into production */}
    {/* {process.env.NODE_ENV != "development" && ( */}
      {/* <div className="fixed bottom-5 right-5">
        <Link href="/edit">
          <Button type="primary">Edit Data</Button>
        </Link>
      </div> */}
    {/* )} */}
    <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
      <h2 className="tablet:m-2 text-4xl text-bold">About </h2>
      <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-4/5 pb-20">
        {data.aboutpara}
      </p>
    </div>

    <Footer /> 
        
  </div>
</div>
)}