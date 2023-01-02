import React, { useRef, useState } from "react";
import { getPostBySlug, getAllPosts } from "../../utils/api";
import Header from "../../components/Header";
import ContentSection from "../../components/ContentSection";
import Footer from "../../components/Footer";
import Head from "next/head";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import Cursor from "../../components/Cursor";
import data from "../../data/portfolio.json";

const BlogPost = ({ post }) => {
  const textOne = useRef();
  const textTwo = useRef();

  useIsomorphicLayoutEffect(() => {
    stagger([textOne.current, textTwo.current], { y: 30 }, { y: 0 });
  }, []);

  return (
    <>
      <Head>
        <title>{"Panda Bits Premium - " + post.title}</title>
        <meta property="og:url" content="http://huntermacias.io/pandabits" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.tagLine} />
        <meta property="og:image" content={post.image} />
       
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@huntermacias-io" />
        <meta name="twitter:creator" content="@HunterMacias" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.tagLine} />
        <meta name="twitter:image" content={post.image} />
      </Head>
      {data.showCursor && <Cursor />}
     
      <div
        className={`container mx-auto mt-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog={true} />
        <div className="mt-10 flex flex-col">
          <img
            className="w-full h-96 rounded-lg shadow-lg object-cover"
            src={post.image}
            alt={post.title}
          ></img>
          <h1
            ref={textOne}
            className="mt-10 text-4xl mob:text-2xl laptop:text-6xl text-bold"
          >
            {post.title}
          </h1>
          <h2
            ref={textTwo}
            className="mt-2 text-xl max-w-4xl text-darkgray opacity-50"
          >
            {post.tagline}
          </h2>
        </div>
        <ContentSection content={post.content}></ContentSection>
        <Footer />
      </div>
     


    </>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "date",
    "slug",
    "preview",
    "title",
    "tagline",
    "preview",
    "image",
    "content",
  ]);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
export default BlogPost;
