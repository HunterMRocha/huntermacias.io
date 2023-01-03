import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { getAllPosts } from "../../utils/api";
import { ISOToDate } from "../../utils";
import Header from "../../components/Header"


function Pandabits ({ posts }) {
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
            <meta charset="utf-8" />
            <meta property="og:url" content="http://huntermacias.io/pandabits"  />
            <meta property="og:title" content="Panda Bits!" />
            <meta property="og:description" content="Create a free account for unlimted access" />
            <meta property="og:image" content="https://as1.ftcdn.net/v2/jpg/04/90/33/40/1000_F_490334013_RzctVsKvF8h5QzaKvqHAVFK3Mm58EcB1.jpg" />
          
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@huntermacias-io" />
            <meta name="twitter:widgets:new-embed-design" content="on" />
            <meta name="twitter:widgets:csp" content="on" />
            <meta name="twitter:creator" content="@HunterMacias" />
            <meta name="twitter:title" content="Panda Bits!"  />
            <meta name="twitter:description" content="Create a free account for unlimted access" />
            <meta name="twitter:image" content="https://as1.ftcdn.net/v2/jpg/04/90/33/40/1000_F_490334013_RzctVsKvF8h5QzaKvqHAVFK3Mm58EcB1.jpg" />
            <meta name="theme-color" content="#2aa3ef" />
            <meta name="msapplication-TileColor" content="#2d89ef" />
        </Head>
       

        <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
          <div className="mt-10">
            <h1
              ref={text}
              className="mx-auto mob:p-2 text-bold text-gray-300 text-6xl laptop:text-8xl w-full"
            >
              Panda-Bits Premium
            </h1>
            <p className="mx-auto mob:p-2 text-sm">5 Free Blogs - Create Free Account for Unlimited Access</p>
            <div className="mt-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10">
              {posts &&
                posts.slice(0, posts.length).map((post) => (
                  <div
                    className="cursor-pointer relative"
                    key={post.slug}
                    onClick={() => Router.push(`/pandabits/${post.slug}`)}
                  >
                        <img
                          className="w-full h-60 rounded-lg border hover:border-emerald-300 object-cover"
                          src={post.image}
                          alt={post.title}
                        ></img>
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
