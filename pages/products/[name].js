import { data } from "../../data";
import style from "../../styles/Product.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Product = ({ product }) => {
  return (
    <div className={style.container}>
      <Head>
        <title>{product.title}</title>
        <meta
          name="description"
          content={product.desc}
        />
      </Head>
      <div className={style.cardL}>
        {product.images.map((img) => (
          <div key={img.id} className={`${style.imgContainer} shadow-lg`}>
            <Image src={img.url} layout="fill" objectFit="cover" alt="" className={"shadow-lg"} />
          </div>
        ))}
      </div>
      <div className={style.cardS}>
        <h1 className={style.title}>{product.title}</h1>
        <p className={style.desc}>{product.longDesc}</p>
        <button className={`${style.button} shadow-lg`}>
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;
  const product = data.filter((item) => item.name === name)[0];
  return {
    props: { product },
  };
};

export default Product;
