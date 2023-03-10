import Head from "next/head";
import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.scss";
import Topbar from "src/components/Topbar/Topbar";
import Bottombar from "src/components/Bottombar/Bottombar";
import PokeList from "src/components/PokeList/PokeList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedexです!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />

      <PokeList />

      {/* <Bottombar /> */}

      {/* <p className={style.scss_test}>Scss Test</p> */}
    </>
  );
}
