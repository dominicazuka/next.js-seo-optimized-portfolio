import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";
import { data } from "../data";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>Dominic Azuka - Software Engineer | Full Stack Developer</title>
        <meta
          name="description"
          content="Full Stack Developer | YouTube Content Creator | JavaScript (MERN) Developer | Coding Tips and Tricks | Product & Graphic Designer | AWS & GCP Architect | Let's Create Innovative Solutions Together!"
          key="desc"
        />
      </Head>
      <Intro />
      <Services services={services} />
      <TechStack />
      <Projects/>
    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
