import React, { useState } from "react";
// import Button from "../components/Button";
import Header from "../components/Header";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "next-themes";
import { Button, Grid } from "@nextui-org/react";

// Data
import yourData from "../data/portfolio.json";
import Cursor from "../components/Cursor";

const Edit = () => {
  // states
  const [data, setData] = useState(yourData);
  const [currentTabs, setCurrentTabs] = useState("HEADER");
  const { theme } = useTheme();

  const saveData = () => {
    if (process.env.NODE_ENV === "development") {
      fetch("/api/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else {
      alert("This thing only works in development mode.");
    }
  };

  // Project Handler
  const editProjects = (projectIndex, editProject) => {
    let copyProjects = data.projects;
    copyProjects[projectIndex] = { ...editProject };
    setData({ ...data, projects: copyProjects });
  };

  const addProject = () => {
    setData({
      ...data,
      projects: [
        ...data.projects,
        {
          id: uuidv4(),
          title: "New Project",
          description: "Web Design & Development",
          imageSrc:
            "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",

          url: "http://chetanverma.com/",
          category: ["all"]
        },
      ],
    });
  };

  const deleteProject = (id) => {
    const copyProjects = data.projects;
    copyProjects = copyProjects.filter((project) => project.id !== id);
    setData({ ...data, projects: copyProjects });
  };

  // Services Handler

  const editServices = (serviceIndex, editService) => {
    let copyServices = data.services;
    copyServices[serviceIndex] = { ...editService };
    setData({ ...data, services: copyServices });
  };

  const addService = () => {
    setData({
      ...data,
      services: [
        ...data.services,
        {
          id: uuidv4(),
          title: "New Service",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
      ],
    });
  };

  const deleteService = (id) => {
    const copyServices = data.services;
    copyServices = copyServices.filter((service) => service.id !== id);
    setData({ ...data, services: copyServices });
  };

  // Socials Handler

  const editSocials = (socialIndex, editSocial) => {
    let copySocials = data.socials;
    copySocials[socialIndex] = { ...editSocial };
    setData({ ...data, socials: copySocials });
  };

  const addSocials = () => {
    setData({
      ...data,
      socials: [
        ...data.socials,
        {
          id: uuidv4(),
          title: "New Link",
          link: "www.chetanverma.com",
        },
      ],
    });
  };

  const deleteSocials = (id) => {
    const copySocials = data.socials;
    copySocials = copySocials.filter((social) => social.id !== id);
    setData({ ...data, socials: copySocials });
  };

  // Resume

  const handleAddExperiences = () => {
    setData({
      ...data,
      resume: {
        ...data.resume,
        experiences: [
          ...data.resume.experiences,
          {
            id: uuidv4(),
            dates: "Enter Dates",
            type: "Full Time",
            position: "Frontend Engineer at X",
            bullets: ["Worked on the frontend of a React application"],
          },
        ],
      },
    });
  };

  const handleEditExperiences = (index, editExperience) => {
    let copyExperiences = data.resume.experiences;
    copyExperiences[index] = { ...editExperience };
    setData({
      ...data,
      resume: { ...data.resume, experiences: copyExperiences },
    });
  };

  return (
    <div className={`container mx-auto ${data.showCursor && "cursor-none"}`}>
      <Header isBlog></Header>
      {data.showCursor && <Cursor />}
      <div className="mt-10">
        <div className={`${theme === "dark" ? "bg-transparent" : "bg-white"}`}>
          <div className="flex items-center justify-between">
            <h1 className="text-6xl mb-4">Dashboard</h1>
            <div className="flex items-center">
              <Button onPress={saveData} type="primary">
                Save
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Button
              ghost
              onPress={() => setCurrentTabs("HEADER")}
              type={currentTabs === "HEADER" && "primary"}
            >
              Header
            </Button>
            <Button
              ghost
              onPress={() => setCurrentTabs("PROJECTS")}
              type={currentTabs === "PROJECTS" && "primary"}
            >
              Projects
            </Button>
            <Button
              ghost
              onPress={() => setCurrentTabs("SERVICES")}
              type={currentTabs === "SERVICES" && "primary"}
            >
              Services
            </Button>
            <Button
              ghost
              onPress={() => setCurrentTabs("ABOUT")}
              type={currentTabs === "ABOUT" && "primary"}
            >
              About
            </Button>
            <Button
              ghost
              onPress={() => setCurrentTabs("SOCIAL")}
              type={currentTabs === "SOCIAL" && "primary"}
            >
              Social
            </Button>
            <Button
              ghost
              onPress={() => setCurrentTabs("RESUME")}
              type={currentTabs === "RESUME" && "primary"}
            >
              Resume
            </Button>
          </div>
        </div>


        {/* HEADER */}
        {currentTabs === "HEADER" && (
          <div className="mt-8 mob:flex-col mob:w-auto smt-10">
            <div className="flex items-center">
              <label className="w-1/5 text-lg opacity-50">Name</label>
              <input
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-lg opacity-50">
                Header Tagline One
              </label>
              <input
                value={data.headerTaglineOne}
                onChange={(e) =>
                  setData({ ...data, headerTaglineOne: e.target.value })
                }
                className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-lg opacity-50">
                Header Tagline Two
              </label>
              <input
                value={data.headerTaglineTwo}
                onChange={(e) =>
                  setData({ ...data, headerTaglineTwo: e.target.value })
                }
                className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-lg opacity-50">
                Header Tagline Three
              </label>
              <input
                value={data.headerTaglineThree}
                onChange={(e) =>
                  setData({ ...data, headerTaglineThree: e.target.value })
                }
                className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-lg opacity-50">
                Header Tagline Four
              </label>
              <input
                value={data.headerTaglineFour}
                onChange={(e) =>
                  setData({ ...data, headerTaglineFour: e.target.value })
                }
                className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-lg opacity-50">Blog</label>
              <div className="w-4/5 ml-10 flex items-center space-x-4">
                <Button
                  ghost
                  onPress={() => setData({ ...data, showBlog: true })}
                  type={data.showBlog && "primary"}
                >
                  Yes
                </Button>
                <Button
                  ghost
                  color="error"
                  onPress={() => setData({ ...data, showBlog: false })}
                  classes={
                    !data.showBlog && "bg-red-500 text-white hover:bg-red-600"
                  }
                >
                  No
                </Button>
              </div>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-lg opacity-50">Dark Mode</label>
              <div className="w-4/5 ml-10 flex items-center space-x-4">
                <Button
                  ghost
                  onPress={() => setData({ ...data, darkMode: true })}
                  type={data.darkMode && "primary"}
                >
                  Yes
                </Button>
                <Button
                  ghost
                  color="error"
                  onPress={() => setData({ ...data, darkMode: false })}
                  classes={
                    !data.darkMode && "bg-red-500 text-white hover:bg-red-600"
                  }
                >
                  No
                </Button>
              </div>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-lg opacity-50">Show Resume</label>
              <div className="w-4/5 ml-10 flex items-center space-x-4">
                <Button
                  ghost
                  onPress={() => setData({ ...data, showResume: true })}
                  type={data.showResume && "primary"}
                >
                  Yes
                </Button>
                <Button
                  ghost color="error"
                  onPress={() => setData({ ...data, showResume: false })}
                  classes={
                    !data.showResume && "bg-red-500 text-white hover:bg-red-600"
                  }
                >
                  No
                </Button>
              </div>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-lg opacity-50">Custom Cursor</label>
              <div className="w-4/5 ml-10 flex items-center space-x-4">
                <Button
                  ghost
                  onPress={() => setData({ ...data, showCursor: true })}
                  type={data.showCursor && "primary"}
                >
                  Yes
                </Button>
                <Button
                  ghost
                  color="error"
                  onPress={() => setData({ ...data, showCursor: false })}
                  classes={
                    !data.showCursor && "bg-red-500 text-white hover:bg-red-600"
                  }
                >
                  No
                </Button>
              </div>
            </div>
          </div>
        )}
        {/* PROJECTS */}
        {currentTabs === "PROJECTS" && (
          <>
            <div className="mt-10">
              {data.projects.map((project, index) => (
                <div className="mt-10 space-y-4" key={project.id}>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl">{project.title}</h1>
                    <Button
                      ghost
                      color="error"
                      onPress={() => deleteProject(project.id)}
                      type="primary"
                    >
                      Delete
                    </Button>
                  </div>

                  <div className="flex items-center mt-5">
                    <label className="w-1/5 text-lg opacity-50">Title</label>
                    <input
                      value={project.title}
                      onChange={(e) =>
                        editProjects(index, {
                          ...project,
                          title: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex items-center mt-2">
                    <label className="w-1/5 text-lg opacity-50">
                      Description
                    </label>
                    <input
                      value={project.description}
                      onChange={(e) =>
                        editProjects(index, {
                          ...project,
                          description: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>

                  <div className="flex items-center mt-2">
                    <label className="w-1/5 text-lg opacity-50">
                      Image Source
                    </label>
                    <input
                      value={project.imageSrc}
                      onChange={(e) =>
                        editProjects(index, {
                          ...project,
                          imageSrc: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>

                  <div className="flex items-center mt-2">
                    <label className="w-1/5 text-lg opacity-50">url</label>
                    <input
                      value={project.url}
                      onChange={(e) =>
                        editProjects(index, {
                          ...project,
                          url: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>

                  {/* <div className="flex items-center mt-2">
                    <label className="w-1/5 text-lg opacity-50">Category</label>
                    <input
                      value={project.url}
                      onChange={(e) =>
                        editProjects(index, {
                          ...project,
                          category: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div> */}


                  <hr className="my-10"></hr>
                </div>
              ))}
            </div>

            <div className="my-10">
              <Button ghost onPress={addProject} type="primary" color="success">
                Add Project +
              </Button>
            </div>
          </>
        )}
        {/* SERVICES */}
        {currentTabs === "SERVICES" && (
          <>
            <div className="mt-10">
              {data.services.map((service, index) => (
                <div className="mt-10 space-y-4" key={service.id}>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl">{service.title}</h1>
                    <Button
                      ghost
                      color="error"
                      onPress={() => deleteService(service.id)}
                      type="primary"
                    >
                      Delete
                    </Button>
                  </div>
                  <div className="flex items-center mt-5">
                    <label className="w-1/5 text-lg opacity-50">Title</label>
                    <input
                      value={service.title}
                      onChange={(e) =>
                        editServices(index, {
                          ...service,
                          title: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex items-center mt-5">
                    <label className="w-1/5 text-lg opacity-50">
                      Description
                    </label>
                    <textarea
                      value={service.description}
                      onChange={(e) =>
                        editServices(index, {
                          ...service,
                          description: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                    ></textarea>
                  </div>
                  <hr className="my-10"></hr>
                </div>
              ))}
            </div>
            <div className="my-10">
              <Button ghost color="success" onPress={addService} type="primary">
                Add Service +
              </Button>
            </div>
          </>
        )}

        {/* about */}
        {currentTabs === "ABOUT" && (
          <div className="mt-10">
            <h1 className="text-2xl">About</h1>
            <textarea
              className="w-full h-96 mt-10 p-2 rounded-md shadow-md border"
              value={data.aboutpara}
              onChange={(e) => setData({ ...data, aboutpara: e.target.value })}
            ></textarea>
          </div>
        )}

        {/* Socials */}
        {currentTabs === "SOCIAL" && (
          <div className="mt-10">
            {data.socials.map((social, index) => (
              <>
                <div key={social.id}>
                  <div className="flex items-center justify-between mb-10">
                    <h1 className="text-2xl">{social.title}</h1>
                    <Button
                      ghost
                      color='error'
                      onPress={() => deleteSocials(social.id)}
                      type="primary"
                    >
                      Delete
                    </Button>
                  </div>
                  <div className="flex items-center mt-5">
                    <label className="w-1/5 text-lg opacity-50">Title</label>
                    <input
                      value={social.title}
                      onChange={(e) =>
                        editSocials(index, {
                          ...social,
                          title: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex items-center mt-5">
                    <label className="w-1/5 text-lg opacity-50">Link</label>
                    <input
                      value={social.link}
                      onChange={(e) =>
                        editSocials(index, {
                          ...social,
                          link: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    />
                  </div>
                  <hr className="my-10"></hr>
                </div>
              </>
            ))}
            <div className="my-10">
              <Button ghost color='success' onPress={addSocials} type="primary">
                Add Social +
              </Button>
            </div>
          </div>
        )}

        {/* RESUME */}
        {currentTabs === "RESUME" && (
          <div className="mt-10">
            <h1>Resume</h1>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-sx opacity-50">Tagline</label>
              <input
                value={data.resume.tagline}
                onChange={(e) =>
                  setData({
                    ...data,
                    resume: { ...data.resume, tagline: e.target.value },
                  })
                }
                className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>
            <div className="flex items-center space-y-3">
              <label className="w-1/5 text-lg opacity-50">Description</label>
              <textarea
                value={data.resume.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    resume: { ...data.resume, description: e.target.value },
                  })
                }
                className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
              ></textarea>
            </div>
            <hr className="my-10"></hr>

            <h1>Experiences</h1>
            <div className="mt-7 space-y-3">
              {data.resume.experiences.map((experiences, index) => (
                <div className="mt-5 space-y-3 mb-10" key={experiences.id}>
                  <div className="flex items-center justify-between mt-10">
                    <h1 className="text-2xl">{experiences.position}</h1>
                    <Button
                      ghost
                      color="error"
                      // onPress={() => deleteProject(project.id)}
                      type="primary"
                    >
                      Delete
                    </Button>
                  </div>

                  <div className="flex items-center mt-5">
                    <label className="w-1/5 text-lg opacity-50">Dates</label>
                    <input
                      value={experiences.dates}
                      onChange={(e) =>
                        handleEditExperiences(index, {
                          ...experiences,
                          dates: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex items-center ">
                    <label className="w-1/5 text-lg opacity-50">Type</label>
                    <input
                      value={experiences.type}
                      onChange={(e) =>
                        handleEditExperiences(index, {
                          ...experiences,
                          type: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex items-center mt-2">
                    <label className="w-1/5 text-lg opacity-50">Position</label>
                    <input
                      value={experiences.position}
                      onChange={(e) =>
                        handleEditExperiences(index, {
                          ...experiences,
                          position: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="mt-2 flex">
                    <label className="w-1/5 text-lg opacity-50">Bullets</label>
                    <div className="w-4/5 ml-10 flex flex-col">
                      <input
                        value={experiences.bullets}
                        onChange={(e) =>
                          handleEditExperiences(index, {
                            ...experiences,
                            bullets: e.target.value,
                          })
                        }
                        placeholder="Bullet One, Bullet Two, Bullet Three"
                        className="p-2 rounded-md shadow-lg border-2"
                        type="text"
                      ></input>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="my-10">
              <Button ghost color='success' onPress={handleAddExperiences} type="primary">
                Add Experience +
              </Button>
            </div>
            <hr className="my-10"></hr>
            <div className="mt-10">
              <h1>Education</h1>
              <div className="flex items-center mt-5">
                <label className="w-1/5 text-lg opacity-50">Name</label>
                <input
                  value={data.resume.education.universityName}
                  onChange={(e) =>
                    setData({
                      ...data,
                      resume: {
                        ...data.resume,
                        education: {
                          ...data.resume.education,
                          universityName: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                  type="text"
                ></input>
              </div>
              <div className="flex items-center mt-5">
                <label className="w-1/5 text-lg opacity-50">Dates</label>
                <input
                  value={data.resume.education.universityDate}
                  onChange={(e) =>
                    setData({
                      ...data,
                      resume: {
                        ...data.resume,
                        education: {
                          ...data.resume.education,
                          universityDate: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                  type="text"
                ></input>
              </div>
              <div className="flex items-center mt-5">
                <label className="w-1/5 text-lg opacity-50">Detail</label>
                <input
                  value={data.resume.education.universityPara}
                  onChange={(e) =>
                    setData({
                      ...data,
                      resume: {
                        ...data.resume,
                        education: {
                          ...data.resume.education,
                          universityPara: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                  type="text"
                ></input>
              </div>
            </div>
            <hr className="my-10"></hr>
            <div className="mt-10">
              <div className="flex">
                <label className="w-1/5 text-lg opacity-50">Languages</label>
                <div className="w-4/5 ml-10 flex flex-col space-y-3">
                  {data.resume.languages.map((language, index) => (
                    <div key={index} className="flex space-x-4">
                      <input
                        value={language}
                        onChange={(e) => {
                          setData({
                            ...data,
                            resume: {
                              ...data.resume,
                              languages: [
                                ...data.resume.languages.slice(0, index),
                                e.target.value,
                                ...data.resume.languages.slice(index + 1),
                              ],
                            },
                          });
                        }}
                        className="w-full p-2 rounded-md shadow-lg border-2"
                        type="text"
                      ></input>
                      <Button
                        ghost
                        color="error"
                        onPress={() =>
                          setData({
                            ...data,
                            resume: {
                              ...data.resume,
                              languages: data.resume.languages.filter(
                                (value, i) => index !== i
                              ),
                            },
                          })
                        }
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                  <Button
                    auto ghost
                    color="success"
                    type="primary"
                    classes="hover:scale-100"
                    onPress={() =>
                      setData({
                        ...data,
                        resume: {
                          ...data.resume,
                          languages: [...data.resume.languages, "Edit me 🚀 "],
                        },
                      })
                    }
                  >
                    Add Language +
                  </Button>
                </div>
              </div>
              <hr className="my-10"></hr>
              <div className="flex">
                <label className="w-1/5 text-lg opacity-50">Frameworks</label>
                <div className="w-4/5 ml-10 flex flex-col space-y-3">
                  {data.resume.frameworks.map((framework, index) => (
                    <div key={index} className="flex space-x-4">
                      <input
                        value={framework}
                        onChange={(e) => {
                          setData({
                            ...data,
                            resume: {
                              ...data.resume,
                              frameworks: [
                                ...data.resume.frameworks.slice(0, index),
                                e.target.value,
                                ...data.resume.frameworks.slice(index + 1),
                              ],
                            },
                          });
                        }}
                        className="w-full p-2 rounded-md shadow-lg border-2"
                        type="text"
                      ></input>
                      <Button
                        ghost
                        color="error"
                        onPress={() =>
                          setData({
                            ...data,
                            resume: {
                              ...data.resume,
                              frameworks: data.resume.frameworks.filter(
                                (value, i) => index !== i
                              ),
                            },
                          })
                        }
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                  <Button
                    ghost
                    color="success"
                    onPress={() =>
                      setData({
                        ...data,
                        resume: {
                          ...data.resume,
                          frameworks: [...data.resume.frameworks, "Edit me 🚀 "],
                        },
                      })
                    }
                    type="primary"
                    classes="hover:scale-100"
                  >
                    Add Framework +
                  </Button>
                </div>
              </div>
              <hr className="my-10"></hr>
              <div className="flex">
                <label className="w-1/5 text-lg opacity-50">Others</label>
                <div className="w-4/5 ml-10 flex flex-col space-y-3 mb-40">
                  {data.resume.others.map((other, index) => (
                    <div key={index} className="flex space-x-4">
                      <input
                        value={other}
                        onChange={(e) => {
                          setData({
                            ...data,
                            resume: {
                              ...data.resume,
                              others: [
                                ...data.resume.others.slice(0, index),
                                e.target.value,
                                ...data.resume.others.slice(index + 1),
                              ],
                            },
                          });
                        }}
                        className="w-full p-2 rounded-md shadow-lg border-2"
                        type="text"
                      ></input>
                      <Button
                        ghost
                        color="error"
                        onPress={() =>
                          setData({
                            ...data,
                            resume: {
                              ...data.resume,
                              others: data.resume.others.filter(
                                (value, i) => index !== i
                              ),
                            },
                          })
                        }
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                  <Button
                    ghost
                    color="success"
                    onPress={() =>
                      setData({
                        ...data,
                        resume: {
                          ...data.resume,
                          others: [...data.resume.others, "Edit me 🚀"],
                        },
                      })
                    }
                    type="primary"
                    classes="hover:scale-100"
                  >
                    Add Other +
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Edit;
