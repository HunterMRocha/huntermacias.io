import { useRef } from "react";
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
import { Card, Container, Row, Col, Text} from '@nextui-org/react';
import FeaturedSponsors from "../components/FeaturedSponsors";

import { Table, Tooltip, User } from "@nextui-org/react";

// Local Data
import data from "../data/portfolio.json";
import subdata from "../data/sub_data"

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

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

  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$20", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ m: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };





  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
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
          <div className="mt-5">
            
            <h1
              ref={textOne}
              className="text-3xl tablet:text-3xl laptop:text-3xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-6xl tablet:text-4xl laptop:text-5xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-6xl tablet:text-4xl laptop:text-5xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-6xl tablet:text-4xl laptop:text-5xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
            </div>
              <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
              {/* <h1 className="text-2xl text-bold">What I Enjoy </h1> */}

          <h1 className="tablet:m-2 text-4xl text-bold text-center">Projects</h1>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
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
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0">
          <h1 className="tablet:m-2 text-4xl text-bold text-center ">Become A Sponsor - Coming Soon ! </h1>
          <Container>
            <Row> 
              <div 
              className=
              "mt-5 grid tablet:m-5 tablet:gap-15 tablet:pb-10 tablet:grid-cols-2 laptop:grid-cols-3 laptop:ml-25 laptop:pb-20 gap-4 mob:grid-cols-1 mob:gap-16 mob:pb-10 desktop:gap-20 desktop:ml-40 desktop:p-10"> 
                {subdata.map((type, index) => (
                    <SubscriptionCard
                      key={index}
                      type={type.type}
                      price={type.price}
                      benefits={type.benefits}
                    />
                ))}
              </div>
            </Row>
          </Container>
          <FeaturedSponsors />
 
        </div>

        
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
