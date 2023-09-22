import React from "react";
import { projectsData } from "../public/utils/helper";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <div
      id="projects"
      className="h-fit w-full flex flex-col justify-center items-center mb-20 p-5"
    >
      <div className="w-fit flex flex-col items-center">
        <p className="font-extrabold text-4xl text-blueText">Projects</p>
        <p className="text-grayText mt-4 text-xl text-center">
          {`Things I've built so far`}
        </p>
      </div>
      <div className="w-[100%] h-fit flex gap-14 mt-14 justify-center items-center flex-wrap">
        {projectsData.map((item, index) => (
          <div
            key={index}
            className="flex sm:w-3/4 md:w-2/5 lg:w-1/4 flex-col items-center h-fit bg-white shadow-lg rounded-[24px]"
          >
            <Image
              alt=""
              src={item.src}
              width={300}
              height={200}
              className="w-full h-48 rounded-t-[24px] shadow-lg"
            />
            <div className="flex flex-col items-center mt-4 px-4 mb-4">
              <p className="text-xl font-bold">{item.name}</p>
              <p className="text-grayText text-sm mt-2 text-center">
                {item.description}
              </p>
            </div>
            <div className="flex gap-4 mt-4 mb-1 justify-between p-3 px-6 w-full h-fit border-t border-grayBg">
              <div className="w-[50%] h-full flex gap-2 items-center justify-center">
                <Image
                  alt=""
                  src={`/linkIcon.svg`}
                  width={30}
                  height={30}
                  className="w-5 h-5"
                />
                <Link
                  href={item.liveLink}
                  className="text-grayText text-sm underline"
                  target="_blank"
                  legacyBehavior
                >
                  <a target="_blank">Live Preview</a>
                </Link>
              </div>
              {/* <div className="w-[50%] h-full flex gap-2 items-center justify-center">
                <Image
                  alt=""
                  src={`/githubIcon.svg`}
                  width={30}
                  height={30}
                  className="w-5 h-5"
                />
                <Link
                  href={item.githubLink}
                  className="text-grayText text-sm underline"
                >
                  <a target="_blank">View Code</a>
                </Link>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
