import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";
import Link from "next/link";
const Intro = () => {
  return (
    <div className={style.container}>
      {/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
      <Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
      {/* <Circle backgroundColor="#01c686" right="-40vh" /> */}
      <div className={style.card}>
        <div className="font-extrabold text-4xl mb-5">
              Hi 🤝<sup className="text-pinkText text-lg">{`}`}</sup>,{" "}
              <p className="mb-2">My name is</p>{" "}
              <p className={`text-blueText mb-2`}>
                Dominic Azuka
              </p>
            </div>
        <p className={style.desc}>
          With over 7 years of experience in software design and development, I
          am a highly skilled professional specializing in the MERN (MongoDB,
          Express.js, React.js, Node.js) stack. Throughout my career, I have
          gained expertise in full-stack software design and development,
          covering a wide range of technologies and specializations. I have
          hands-on experience with Server-Side Rendering (SSR), SWR, Amazon Web
          Services (AWS), microservices architecture, Continuous
          Integration/Continuous Deployment (CI/CD), REST APIs, MySqli, PHP,
          JavaScript, HTML/CSS, business analytics, UI/UX design, graphics
          design, technical writing, digital marketing, SEO optimization,
          database design, Model-View-Controller (MVC) architecture, and Test
          Driven Development (TDD).
        </p>
        <br />
        <Link href="/contact">
          <button className={style.button}>CONTACT ME</button>
        </Link>
      </div>
      <div className={style.card}>
        <div className="h-full flex justify-center items-center my-14">
          <div className="w-300 h-150 border-4 border-blueBorder p-2 rounded-full shadow-lg">
          <Image
              src={`/pic.jpg`}
              alt=""
              width={500}
              height={600}
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
