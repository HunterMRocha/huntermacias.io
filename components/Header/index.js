import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";
import { Button, Spacer, Image } from "@nextui-org/react";


const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  const [email, setEmail] = useState('none');
  const [password, setPassword] = useState('noneP');

  const onChange = event => {
    setEmail({email:event.target.value});
    console.log("email: ", email); 
  
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

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
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></Image>
                  </Button>
                )}

                <Popover.Button>
                  <Image
                    className="h-5"
                    src={`/images/${
                      !open
                      ? theme === "dark"
                      ? "menu-white.svg"
                      : "menu.svg"
                      : theme === "light"
                      ? "cancel.svg"
                      : "cancel-white.svg"
                    }`}
                  ></Image>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button auto ghost onClick={handleWorkScroll}>Work</Button>
                  <Spacer x={0.5} />
                  <Button auto ghost onClick={handleAboutScroll}>About</Button>
                  <Spacer x={0.5} />
                  {showBlog && (
                    <Button auto ghost onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  <Spacer x={0.5} />
                  {showResume && (
                    <Button auto
                      ghost 
                      onClick={() => window.open("huntermacias20@gmail.com")}>
                      Resume
                    </Button>
                  )}
                  <Spacer x={0.5} />
                  <Button ghost auto onClick={() => window.open("https://www.youtube.com/channel/UCehlaH65-4g7NywRWX0MlkA/videos")}>
                    YouTube
                  </Button>
                  <Spacer x={0.5} />
            <Spacer x={0.5} />
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
                  <Button
                    ghost
                    onClick={() => window.open("https://www.youtube.com/channel/UCehlaH65-4g7NywRWX0MlkA/videos")}>
                    YouTube
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
          {name}.
        </h1>



        {/* bottom buttons */}
        {!isBlog ? (
          <div className="flex">
            <Button ghost auto onClick={handleWorkScroll}>Work</Button>
            <Spacer x={0.5} />
            <Button ghost auto onClick={handleAboutScroll}>About</Button>
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
            <Button ghost auto onClick={() => window.open("https://www.youtube.com/channel/UCehlaH65-4g7NywRWX0MlkA/videos")}>
              YouTube
            </Button>
            <Spacer x={0.5} />
          
            {mounted && theme && data.darkMode && (
              <Button
                ghost auto 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Image
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></Image>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button ghost auto onClick={() => router.push("/")}>Home</Button>
            <Spacer x={0.5} />
            <Button ghost auto onClick={() => router.push("/")}>About</Button>
            <Spacer x={0.5} />
            {showBlog && (
              <Button auto ghost onClick={() => router.push("/blog")}>Blog</Button>
            )}
            <Spacer x={0.5} />
            {showResume && (
              <Button
                auto ghost
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
              
            )}
            <Spacer x={0.5} />
            <Button auto ghost onClick={() => window.open("https://www.youtube.com/channel/UCehlaH65-4g7NywRWX0MlkA/videos")}>
              YouTube
            </Button>
            <Spacer x={0.5} />
            {mounted && theme && data.darkMode && (
              <Button auto ghost
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Image
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
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

