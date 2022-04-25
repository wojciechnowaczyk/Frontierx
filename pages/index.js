import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Box from "../components/Box";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontierx</title>
        <meta name="description" content="Frontierx lorem ipsum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="grid grid-cols-2 gap-4 ">
          <Box>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
              mi ut luctus blandit. Maecenas rutrum mollis sem ac varius. Mauris
              vestibulum tortor eget sem egestas, sit amet pharetra erat
              tincidunt. Donec et rhoncus felis, at efficitur dui. Sed sit amet
              augue volutpat turpis euismod luctus. Phasellus fermentum risus a
              massa elementum, eu elementum lacus laoreet.
            </div>
          </Box>
          <Box>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
              mi ut luctus blandit. Maecenas rutrum mollis sem ac varius. Mauris
              vestibulum tortor eget sem egestas, sit amet pharetra erat
              tincidunt. Donec et rhoncus felis, at efficitur dui. Sed sit amet
              augue volutpat turpis euismod luctus. Phasellus fermentum risus a
              massa elementum, eu elementum lacus laoreet.
            </div>
          </Box>
          <div className="col-span-1" />
          <Box>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
              mi ut luctus blandit. Maecenas rutrum mollis sem ac varius. Mauris
              vestibulum tortor eget sem egestas, sit amet pharetra erat
              tincidunt. Donec et rhoncus felis, at efficitur dui. Sed sit amet
              augue volutpat turpis euismod luctus. Phasellus fermentum risus a
              massa elementum, eu elementum lacus laoreet.
            </div>
          </Box>
        </div>
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
