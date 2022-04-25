import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Content from "../components/Content";
import Menu from "../components/Menu";
import GradientBox from "../components/GradientBox";
import MainBox from "../components/MainBox";
import Footer from "../components/Footer";

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
      <main className={styles.main}>
        <MainBox />
        <Content />
      </main>
      <Footer />
    </div>
  );
}
