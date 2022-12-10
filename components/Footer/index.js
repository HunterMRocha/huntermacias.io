import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
        <div>
          {/* <h1 className="tablet:m-10 text-2xl text-bold">Contact</h1> */}
          <div className="mt-10">

            <Button type="primary">Schedule a call</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Created by{" "}
        <Link href="http://www.huntermacias.io/">
          <a className="underline underline-offset-1">Hunter Macias</a>
        </Link>
    
      </h1>
    </>
  );
};

export default Footer;
