import style from "../styles/Services.module.css";
import Image from "next/image";
import Link from "next/link";

const Services = ({ services }) => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1 className={style.title}>What I Can Do?</h1>
        <h1 className={style.subtitle}>Services I can help you with</h1>
        <div className={style.services}>
          {services.map((service) => (
            <Link key={service.id} href={`/products/${service.name}`} passHref>
              <div className={`${style.service} shadow-lg rounded-[24px]`}>
                <div className={style.catInfo}>{service.desc}</div>
                <span className={style.cat}>{service.title}</span>
                <div className={`${style.media} shadow-lg rounded-[50px]`}>
                  {service.video ? (
                    <video
                      className={`${style.video} shadow-lg rounded-[24px]`}
                      src={`/img/${service.video}`}
                      autoPlay
                      loop
                      muted
                    />
                  ) : (
                    <Image
                      src={`/img/${service.photo}`}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                      className="shadow-lg rounded-[24px]"
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
