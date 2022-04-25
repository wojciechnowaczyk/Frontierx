import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Content from "../components/Content";
import Menu from "../components/Menu";
import GradientBox from "../components/GradientBox";
import MainBox from "../components/MainBox";

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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
