import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";
import { Button, Spacer } from "@nextui-org/react";
import { Image } from '@nextui-org/react';



const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

 

  return (
    <>
      <Popover className="block tablet:hidden mt-8">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    ghost auto
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <Image
                      css={{width:"20px", height:"20px"}}
                      className="w-6 h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                      alt=''
                    ></Image>
                  </Button>
                )}

                <Popover.Button>
                  <Image
                    css={{width:"30px", height:"30px"}}
                    src={`/images/${
                      !open
                      ? theme === "dark"
                      ? "menu-white.svg"
                      : "menu.svg"
                      : theme === "light"
                      ? "cancel.svg"
                      : "cancel-white.svg"
                    }`}
                    alt=''
                  ></Image>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-6/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-lg`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button auto ghost onClick={handleWorkScroll}>Work</Button>
                  <Spacer x={0.2} />
                  <Button auto ghost onClick={handleAboutScroll}>About</Button>
                  <Spacer x={0.2} />
                  {showBlog && (
                    <Button auto ghost onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  <Spacer x={0.2} />
                  {showResume && (
                    <Button auto
                      ghost 
                      onClick={() => router.push("/resume")}>
                      Resume
                    </Button>
                  )}
                  <Spacer x={0.2} />
                  <Button ghost auto onClick={() => router.push("/pandabits")}>
                    Panda-Bits
                  </Button>
                  <Spacer x={0.2} />
            <Spacer x={0.2} />
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button ghost auto onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  <Spacer x={0.5} />
                  <Button ghost auto onClick={() => router.push("/")} classes="first:ml-1">
                    About
                  </Button>
                  <Spacer x={0.5} />
                  {showBlog && (
                    <Button ghost auto onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                   <Spacer x={0.5} />
                  {showResume && (
                    <Button
                      ghost auto 
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}
                  <Spacer x={0.5} />
                  <Button ghost auto onClick={() => router.push("/pandabits")}>
                    Panda-Bits
                  </Button>
                  <Spacer x={0.5} />
    
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}
        </h1>



        {/* bottom buttons */}
        {!isBlog ? (
          <div className="flex">
            <Button ghost auto onClick={() => router.push("/")}>Work</Button>
            <Spacer x={0.2} />
            <Button ghost auto onClick={() => router.push("/")}>About</Button>
            <Spacer x={0.2} />
            {showBlog && (
              <Button ghost auto onClick={() => router.push("/blog")}>Blog</Button>
            )}
            <Spacer x={0.2} />
            {showResume && (
              
              <Button
                ghost auto
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}
            <Spacer x={0.2} />
            <Button ghost auto onClick={() => router.push("/pandabits")}>
                Panda-Bits
            </Button>
            <Spacer x={0.2} />
          
            {mounted && theme && data.darkMode && (
              <Button
                ghost auto 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Image
                  css={{width:"20px", height:"20px"}}
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt=''
                ></Image>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button ghost auto onClick={() => router.push("/")}>Home</Button>
            <Spacer x={0.2} />
            <Button ghost auto onClick={() => router.push("/")}>About</Button>
            <Spacer x={0.2} />
            {showBlog && (
              <Button auto ghost onClick={() => router.push("/blog")}>Blog</Button>
            )}
            <Spacer x={0.2} />
            {showResume && (
              <Button
                auto ghost
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
              
            )}
            <Spacer x={0.2} />
            <Button ghost auto onClick={() => router.push("/pandabits")}>
              Panda-Bits
            </Button>
            <Spacer x={0.2} />
            {mounted && theme && data.darkMode && (
              <Button auto ghost
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Image
                  css={{width:"20px", height:"20px"}}
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt=''
                ></Image>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

