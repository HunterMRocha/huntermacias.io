import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { stagger } from "../../animations";
import Button from "../../components/Button";
import Header from "../../components/Header";
import data from "../../data/portfolio.json";
import { ISOToDate, useIsomorphicLayoutEffect } from "../../utils";
import { getAllPosts } from "../../utils/api";
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import { Auth } from 'aws-amplify';
import { Image } from "@nextui-org/react";
// import awsExports from '../../data/aws-exports';

Auth.configure(
  {
    "aws_project_region": "us-west-2",
    "aws_cognito_identity_pool_id": "us-west-2:41803657-2682-4c2f-a834-9b4131988348",
    "aws_cognito_region": "us-west-2",
    "aws_user_pools_id": "us-west-2_JqkvOx2sc",
    "aws_user_pools_web_client_id": "4ev8ivporc2rbf4lpdquqf37ld",
    "oauth": {},
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_user_files_s3_bucket": "huntermaciasio9b99694a2f704a8a8853dd222d53679a01823-staging",
    "aws_user_files_s3_bucket_region": "us-west-2"
  }
);

function Blog ({ posts }) {
  const showBlog = useRef(data.showBlog);
  const text = useRef();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    stagger(
      [text.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
    if (showBlog.current) stagger([text.current], { y: 30 }, { y: 0 });
    else router.push("/");
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const createBlog = () => {
    if (process.env.NODE_ENV != "development") {
      fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        router.reload(window.location.pathname);
      });
    } 
    else {
      alert("This thing only works in development mode.");
    }
  };

  const deleteBlog = (slug) => {
    if (process.env.NODE_ENV != "development") {
      fetch("/api/blog", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug,
        }),
      }).then(() => {
        router.reload(window.location.pathname);
      });
    } else {
      alert("This thing only works in development mode.");
    }
  };
  
  // <Authenticator>
  return (
    
    showBlog.current && (
      <>
        {/* {data.showCursor && <Cursor />} */}
    
        <Head>
            <title>Blogs</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charset="utf-8" />
            <meta property="og:url" content="http://huntermacias.io/blog"  />
            <meta property="og:title" content="Panda Bit Tech Blog!" />
            <meta property="og:description" content="Create a free account for unlimted access" />
            <meta property="og:image" content="https://as1.ftcdn.net/v2/jpg/04/90/33/40/1000_F_490334013_RzctVsKvF8h5QzaKvqHAVFK3Mm58EcB1.jpg" />
          
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@huntermacias-io" />
            <meta name="twitter:widgets:new-embed-design" content="on" />
            <meta name="twitter:widgets:csp" content="on" />
            <meta name="twitter:creator" content="@HunterMacias" />
            <meta name="twitter:title" content="Panda Bit Tech Blog!"  />
            <meta name="twitter:description" content="Create a free account for unlimted access" />
            <meta name="twitter:image" content="https://as1.ftcdn.net/v2/jpg/04/90/33/40/1000_F_490334013_RzctVsKvF8h5QzaKvqHAVFK3Mm58EcB1.jpg" />
            <meta name="theme-color" content="#2aa3ef" />
            <meta name="msapplication-TileColor" content="#2d89ef" />
        </Head>
       

        <div className="container mx-auto mb-10">
          <Header isBlog={true}></Header>
          <div className="mt-10">
            <h1
              ref={text}
              className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full"
            >
              Blogs
            </h1>
            <p className="mt-2 opacity-50 text-lg"></p>
            <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10">
              {posts &&
                posts.map((post) => (
                  <div
                    className="cursor-pointer relative"
                    key={post.slug}
                    onClick={() => Router.push(`/blog/${post.slug}`)}
                  >
                    <Image
                      className="w-full h-60 rounded-lg border hover:border-emerald-300 shadow-lg object-cover"
                      src={post.image}
                      alt={post.title}
                    ></Image>
                     <meta
                        name="description"
                        property="og:image"
                        content={post.image}
                      />
                    <h2 className="mt-5 text-emerald-300 font-thin text-2xl">{post.title}</h2>
                    <p className="mt-2 opacity-50 text-lg">{post.preview}</p>
                    <span className="text-sm mt-5 opacity-25">
                      {ISOToDate(post.date)}
                    </span>
                    {process.env.NODE_ENV != "development" && mounted && (
                      <div className="absolute top-0 right-0">
                        <Button
                          onClick={(e) => {
                            deleteBlog(post.slug);
                            e.stopPropagation();
                          }}
                          type={"primary"}
                        >
                          Delete
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
        {process.env.NODE_ENV === "production" && mounted && (
          <div className="fixed bottom-6 right-6">
            <Button onClick={createBlog} type={"primary"}>
              Add New Post +{" "}
            </Button>
          </div>
        )}
      </>
    )
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

export default withAuthenticator(Blog);
