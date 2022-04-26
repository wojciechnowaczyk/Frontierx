import Head from "next/head";
import styles from "../styles/Home.module.css";
import Content from "../components/Content";
import Menu from "../components/Menu";
import GradientBox from "../components/GradientBox";
import Footer from "../components/Footer";
import Image from "next/image";

const Header = require("../images/Header.png");
const HeaderCircle = require("../images/HeaderCircle.png");

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontierx</title>
        <meta name="description" content="Frontierx lorem ipsum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <GradientBox />
      <main
        className={`${styles.main} bg-gradient-to-b from-[#2E2D66] via-[#3A273F] to-[#181818] px-[10px]`}
      >
        <div className="w-full pt-[41px]">
          <Image src={Header} alt="Main Header" />
        </div>
        <div className=" pb-[13px] translate-y-[-50%] w-[149px] h-[149px]">
          <Image src={HeaderCircle} alt="HeaderCircle" />
        </div>
        <Content />
      </main>
      <Footer />
    </div>
  );
}
