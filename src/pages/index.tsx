import styles from "./index.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tewke User Dashboard</title>
        <meta name="Dashboard For Your Devices" content="Tewke" />
        <link rel="icon" href="/tewke-logo.jpeg" />
        <title>Hello, world!</title>
  </Head>
  <body>
    <header className="py-5 bg-secondary text-center">
      <h1 className="display-1">Tewke User Dashboard</h1>
      <p className="lead mb-0">Here are your products from our line!</p>
    </header>

    



  </body>
    </>
  );
}
