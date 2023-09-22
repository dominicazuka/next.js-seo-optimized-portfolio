// import style from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* <div className={style.container}>
        <div className={style.cardL}>
          <h1 className={style.title}>DOMINIC AZUKA.</h1>
          <h1 className={style.linkTitle}>
            <Link href="/contact" className={style.link} passHref>
              <>
                <span className={style.linkText}>WORK WITH ME</span>
                <Image src={"/img/link.png"} width={40} height={50} alt="" />
              </>
            </Link>
          </h1>
        </div>
        <div className={style.cardS}>
          <div className={style.cardItem}>F.C.T, ABUJA,</div>
          <div className={style.cardItem}>
            <a href="mailto:visitdominicazuka@gmail.com">
              VISITDOMINICAZUKA@GMAIL.COM
            </a>
            <br /> +2347041944295
          </div>
        </div>
        <div className={style.cardS}>
          <div className={style.cardItem}>
            CONNECT WITH ME:
            <br />
            <div className="">
              <Link href={"https://github.com/Hanzala-Ahmed"} target="_blank">
                <Image src={`/githubIcon.svg`} alt="" width={25} height={25} />
              </Link>
              <Link href={"https://twitter.com/dominic_azuka"} target="_blank">
                <Image src={`/twitterIcon.svg`} alt="" width={27} height={27} />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/hanzala-ahmed-433535170/"}
                target="_blank"
              >
                <Image
                  src={`/linkedInIcon.svg`}
                  alt=""
                  width={26}
                  height={26}
                />
              </Link>
            </div>
          </div>
          <div className={style.cardItem}>
            © {currentYear} DOMINIC AZUKA,
            <br />
            ALL RIGHTS RESERVED
          </div>
        </div>
      </div> */}

<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

    </>
  );
};

export default Footer;
