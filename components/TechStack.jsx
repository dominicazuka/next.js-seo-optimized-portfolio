import style from "../styles/TechStack.module.css";
import Image from "next/image";
import Circle from "./Circle";
import { stackData } from "../public/utils/helper";

const TechStack = () => {
  return (
    <div className={style.container}>
      <Circle top="-70vh" left="0" right="0" backgroundColor="darkblue" />

      <div className={style.wrapper}>
        
          <div
            id="tech-stack"
            className="h-fit w-full flex flex-col justify-center items-center mb-10"
          >
            <div className="w-fit flex flex-col items-center">
              <p className="font-extrabold text-4xl text-blueText">
                My Tech Stack
              </p>
              <p className="text-grayText mt-4 text-xl text-center mb-10">
                Technologies I’ve been working with recently
              </p>
            </div>
            <div className="w-[80%] h-fit flex gap-14 mt-14 justify-center items-center flex-wrap">
              {stackData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  <Image
                    alt=""
                    src={item.src}
                    width={50}
                    height={50}
                    className="w-16 h-16"
                  />
                  <span className="text-white text-[10px] px-3 py-0.5 bg-blueBg mt-2 rounded-full">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default TechStack;
