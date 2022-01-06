import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Act99 | 기술블로그</title>
        <meta name="description" content="Act99의 기술블로그입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h3>홈입니다</h3>
      </div>
    </div>
  );
};

export default Home;
