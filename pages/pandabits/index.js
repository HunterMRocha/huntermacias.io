import Head from "next/head";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import { getAllPosts } from "../../utils/api";
import { ISOToDate } from "../../utils";
import Header from "../../components/Header"
import { Image } from '@nextui-org/react';

function Pandabits ({ posts }) {

  const text = useRef();
  const router = useRouter();

  useEffect(() => {
      router.push("/pandabits");
      
  }, []);

  return (
      <>
        <Head>
            <title>Panda Bits</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <html lang="en" />
            <meta property="og:url" content="http://huntermacias.io/pandabits"  />
            <meta property="og:title" content="Panda Bits!" />
            <meta property="og:description" content="Create a free account for unlimted access" />
            <meta property="og:image" content="https://media.giphy.com/media/DyMkDYUxIwPVnPOrsb/giphy-downsized-large.gif" />
          
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@huntermacias-io" />
            <meta name="twitter:widgets:new-embed-design" content="on" />
            <meta name="twitter:widgets:csp" content="on" />
            <meta name="twitter:creator" content="@HunterMacias" />
            <meta name="twitter:title" content="Panda Bits!"  />
            <meta name="twitter:description" content="Create a free account for unlimted access" />
            <meta name="twitter:image" content="https://media.giphy.com/media/DyMkDYUxIwPVnPOrsb/giphy-downsized-large.gif" />
            <meta name="theme-color" content="#2aa3ef" />
            <meta name="msapplication-TileColor" content="#2d89ef" />
        </Head>
       

        <div className="container mx-auto mb-10">
        <Header />
          <div className="mt-10">
            <h1
              ref={text}
              className="mx-auto mob:p-2 text-bold text-gray-300 text-6xl laptop:text-8xl w-full"
            >
              Panda-Bits Premium
            </h1>
            <p className="mx-auto mob:p-2 text-sm">5 Free Blogs - Create Free Account for Unlimited Access</p>
            <div className="mt-10 grid grid-cols-1 gap-10 tablet:grid-cols-2 laptop:grid-cols-3 justify-between">
              {posts &&
                posts.slice(0, posts.length).map((post) => (
                  <div
                    className="cursor-pointer relative"
                    key={post.slug}
                    onClick={() => Router.push(`/pandabits/${post.slug}`)}
                  >
                    <Image
                      css={{width:"fill", maxHeight:"175px"}}
                      className="w-full h-30 rounded-lg border hover:border-emerald-300"
                      src={post.image}
                      alt={post.title}
                      objectFit="cover"
                    ></Image>
                    <h2 className="mt-5 text-emerald-300 font-thin text-2xl">{post.title}</h2>
                    <p className="mt-2 opacity-50 text-sm">{post.preview}</p>
                    <span className="text-sm mt-5 opacity-25">
                      {ISOToDate(post.date)}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      
      </>
    
  );

};

export async function getStaticProps() {
  const posts = getAllPosts([
    "slug",
    "title",
    "image",
    "preview",
    "author",
    "date",
  ]);

  return {
    props: {
      posts: [...posts],
    },
  };
}

export default Pandabits;
