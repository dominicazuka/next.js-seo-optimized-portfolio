import Circle from "../components/Circle";
import style from "../styles/Contact.module.css";
import Head from "next/head";

const Contact = () => {
  return (
    <div className={style.container}>
    <Head>
        <title>Contact Me - Software Engineer | Full Stack Developer</title>
        <meta
          name="description"
          content="Full Stack Developer | YouTube Content Creator | JavaScript (MERN) Developer | Coding Tips and Tricks | Product & Graphic Designer | AWS & GCP Architect | Let's Create Innovative Solutions Together!"
          key="desc"
        />
      </Head>
        <Circle backgroundColor="green" left="-40vh" top="-20vh" className={style.circle}/>
        <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" className={style.circle}/>
        <br/>
      <h1 className={style.title}><b>Get in Touch</b></h1>
      <form className={style.form}>
        <input className={style.inputS} type="text" placeholder="Name" />
        <br/>
        <input className={style.inputS} type="text" placeholder="Phone" />
        <input className={style.inputL} type="text" placeholder="Email" />
        <input className={style.inputL} type="text" placeholder="Subject" />
        <textarea
          className={style.textArea}
          type="text"
          rows={6}
          placeholder="Message"
        />
        <button className={style.button}>SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
