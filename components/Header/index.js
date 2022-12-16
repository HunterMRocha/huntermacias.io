import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";
import { Modal, Input, Row, Button, Checkbox, Text, Spacer } from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

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
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
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
                  ></img>
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
                  <Button ghost auto onClick={handler}>
              Login
            </Button>
            <Spacer x={0.5} />
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
              >
              <Modal.Header>
                <Text size={18}>
                  Membership Sign Up
                </Text>
              </Modal.Header>
              {/* Modal Body */}
              <Modal.Body>
                <Input
                  clearable bordered fullWidth color="primary" size="lg" placeholder="Email" 
                  contentLeft={<Mail fill="currentColor" />}
                />
                 <Input
                  clearable bordered fullWidth color="primary" type='password' size="lg" placeholder="Password" 
                  contentLeft={<Password fill="currentColor" />}
                />
                <Row justify="space-between">
                  <Checkbox>
                    <Text size={14}>Remember me</Text>
                  </Checkbox>
                  <Text size={14}>Forgot password?</Text>
                </Row>
              </Modal.Body>

                {/* Modal Footer */}
                <Modal.Footer>
                  <Button auto flat color="error" onClick={closeHandler}>
                    Close
                  </Button>
                  <Button auto color='success' onClick={closeHandler}>
                    Sign in
                  </Button>
                </Modal.Footer>
            </Modal>
            <Spacer x={0.5} />
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
              >
              <Modal.Header>
                <Text size={18}>
                  Membership Sign Up
                </Text>
              </Modal.Header>
              {/* Modal Body */}
              <Modal.Body>
                <Input
                  clearable bordered fullWidth color="primary" size="lg" placeholder="Email" 
                  contentLeft={<Mail fill="currentColor" />}
                />
                 <Input
                  clearable bordered fullWidth color="primary" type='password' size="lg" placeholder="Password" 
                  contentLeft={<Password fill="currentColor" />}
                />
                <Row justify="space-between">
                  <Checkbox>
                    <Text size={14}>Remember me</Text>
                  </Checkbox>
                  <Text size={14}>Forgot password?</Text>
                </Row>
              </Modal.Body>

                {/* Modal Footer */}
                <Modal.Footer>
                  <Button auto flat color="error" onClick={closeHandler}>
                    Close
                  </Button>
                  <Button auto color='success' onClick={closeHandler}>
                    Sign in
                  </Button>
                </Modal.Footer>
            </Modal>
            <Spacer x={0.5} />
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
              >
              <Modal.Header>
                <Text size={18}>
                  Membership Sign Up
                </Text>
              </Modal.Header>
              {/* Modal Body */}
              <Modal.Body>
                <Input
                  clearable bordered fullWidth color="primary" size="lg" placeholder="Email" 
                  contentLeft={<Mail fill="currentColor" />}
                />
                 <Input
                  clearable bordered fullWidth color="primary" type='password' size="lg" placeholder="Password" 
                  contentLeft={<Password fill="currentColor" />}
                />
                <Row justify="space-between">
                  <Checkbox>
                    <Text size={14}>Remember me</Text>
                  </Checkbox>
                  <Text size={14}>Forgot password?</Text>
                </Row>
              </Modal.Body>

                {/* Modal Footer */}
                <Modal.Footer>
                  <Button auto flat color="error" onClick={closeHandler}>
                    Close
                  </Button>
                  <Button auto color='success' onClick={closeHandler}>
                    Sign in
                  </Button>
                </Modal.Footer>
            </Modal>

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
                  <Button ghost auto onClick={handler}>
                    Login
                  </Button>
                  <Spacer x={0.5} />
                  <Modal
                      closeButton
                      blur
                      aria-labelledby="modal-title"
                      open={visible}
                      onClose={closeHandler}
                    >
                    <Modal.Header>
                      <Text size={18}>
                        Membership Sign Up
                      </Text>
                    </Modal.Header>
                    {/* Modal Body */}
                    <Modal.Body>
                      <Input
                        clearable bordered fullWidth color="primary" size="lg" placeholder="Email" 
                        contentLeft={<Mail fill="currentColor" />}
                      />
                      <Input
                        clearable bordered fullWidth color="primary" type='password' size="lg" placeholder="Password" 
                        contentLeft={<Password fill="currentColor" />}
                      />
                      <Row justify="space-between">
                        <Checkbox>
                          <Text size={14}>Remember me</Text>
                        </Checkbox>
                        <Text size={14}>Forgot password?</Text>
                      </Row>
                    </Modal.Body>

                      {/* Modal Footer */}
                      <Modal.Footer>
                        <Button auto flat color="error" onClick={closeHandler}>
                          Close
                        </Button>
                        <Button auto color='success' onClick={closeHandler}>
                          Sign in
                        </Button>
                      </Modal.Footer>
                  </Modal>
                  <Spacer x={0.5} />
                  <Modal
                      closeButton
                      blur
                      aria-labelledby="modal-title"
                      open={visible}
                      onClose={closeHandler}
                    >
                    <Modal.Header>
                      <Text size={18}>
                        Membership Sign Up
                      </Text>
                    </Modal.Header>
                    {/* Modal Body */}
                    <Modal.Body>
                      <Input
                        clearable bordered fullWidth color="primary" size="lg" placeholder="Email" 
                        contentLeft={<Mail fill="currentColor" />}
                      />
                      <Input
                        clearable bordered fullWidth color="primary" type='password' size="lg" placeholder="Password" 
                        contentLeft={<Password fill="currentColor" />}
                      />
                      <Row justify="space-between">
                        <Checkbox>
                          <Text size={14}>Remember me</Text>
                        </Checkbox>
                        <Text size={14}>Forgot password?</Text>
                      </Row>
                    </Modal.Body>

                      {/* Modal Footer */}
                      <Modal.Footer>
                        <Button auto flat color="error" onClick={closeHandler}>
                          Close
                        </Button>
                        <Button auto color='success' onClick={closeHandler}>
                          Sign in
                        </Button>
                      </Modal.Footer>
                  </Modal>
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
            <Button ghost auto onClick={handler}>
              Loginggggggg
            </Button>
            <Spacer x={0.5} />
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
              >
              <Modal.Header>
                <Text size={18}>
                  Membership Sign Up
                </Text>
              </Modal.Header>
              {/* Modal Body */}
              <Modal.Body>
                <Input
                  clearable bordered fullWidth color="primary" size="lg" placeholder="Email" 
                  contentLeft={<Mail fill="currentColor" />}
                />
                 <Input
                  clearable bordered fullWidth color="primary" type='password' size="lg" placeholder="Password" 
                  contentLeft={<Password fill="currentColor" />}
                />
                <Row justify="space-between">
                  <Checkbox>
                    <Text size={14}>Remember me</Text>
                  </Checkbox>
                  <Text size={14}>Forgot password?</Text>
                </Row>
              </Modal.Body>

                {/* Modal Footer */}
                <Modal.Footer>
                  <Button auto flat color="error" onClick={closeHandler}>
                    Close
                  </Button>
                  <Button auto color='success' onClick={closeHandler}>
                    Sign in
                  </Button>
                </Modal.Footer>
            </Modal>
            {mounted && theme && data.darkMode && (
              <Button
                ghost auto 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
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
            <Button ghost auto onClick={handler}>
              Login
            </Button>
            <Spacer x={0.5} />
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
              >
              <Modal.Header>
                <Text size={18}>
                  Membership Sign Up
                </Text>
              </Modal.Header>
              {/* Modal Body */}
              <Modal.Body>
                <Input
                  clearable bordered fullWidth color="primary" size="lg" placeholder="Email" 
                  contentLeft={<Mail fill="currentColor" />}
                />
                 <Input
                  clearable bordered fullWidth color="primary" type='password' size="lg" placeholder="Password" 
                  contentLeft={<Password fill="currentColor" />}
                />
                <Row justify="space-between">
                  <Checkbox>
                    <Text size={14}>Remember me</Text>
                  </Checkbox>
                  <Text size={14}>Forgot password?</Text>
                </Row>
              </Modal.Body>

                {/* Modal Footer */}
                <Modal.Footer>
                  <Button auto flat color="error" onClick={closeHandler}>
                    Close
                  </Button>
                  <Button auto color='success' onClick={closeHandler}>
                    Sign in
                  </Button>
                </Modal.Footer>
            </Modal>
      
            {mounted && theme && data.darkMode && (
              <Button auto ghost
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

