import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
// import Button from "../components/Button";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
// import { EditIcon } from './EditIcon';

// Data
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);
  

  useEffect(() => {
    setMount(true);
    if (!data.showResume) {
      router.push("/");
    }
  }, []);
  
  return (
    <>

      {/* {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-10 right-12">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
          <Button onClick={() => router.push("/edit")} color="secondary" flat>
            Edit My Resume
          </Button>
        </div>
      )}
      */}
      {data.showCursor && <Cursor />} 

      <div className="container mx-auto mb-10">
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{data.name}</h1>
              <h2 className="text-lg mt-5">{data.resume.tagline}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                {data.resume.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>

                {data.resume.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                <div className="mt-2">
                  <h2 className="text-lg">{data.resume.education.universityName}</h2>
                  <h3 className="text-sm opacity-75">
                    {data.resume.education.universityDate}
                  </h3>
                  <p className="text-sm mt-2 opacity-50">
                    {data.resume.education.universityPara}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap">
                <h1 className="text-xl font-bold">Skills</h1>
                <div className="flex flex-wrap mob:flex-col-2 mob:flex-row-2">
                  {data.resume.languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-sm">Languages</h2>
                      <ul className="list-disc">
                        {data.resume.languages.map((language) => (
                          <li key={language} className="ml-5 py-0.5">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {data.resume.frameworks && (
                    <div className="mt-2 mob:mt-5 px-6 ">
                      <h2 className="text-sm">Frameworks</h2>
                      <ul className="list-disc">
                        {data.resume.frameworks.map((framework) => (
                          <li key={framework} className="ml-5 py-0.5">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {data.resume.others && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-sm">Others</h2>
                      <ul className="list-disc">
                        {data.resume.others.map((other) => (
                          <li key={other} className="ml-5 py-0.5">
                            {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        
      </div>
    </>
  );
};

export default Resume;
