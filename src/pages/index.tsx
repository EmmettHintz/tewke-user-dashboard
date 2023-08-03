import styles from "./index.module.css";
import Head from "next/head";
import Link from "next/link";
import Graph from "~/components/Graph";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tewke User Dashboard</title>
        <meta name="Dashboard For Your Devices" content="Tewke" />
        <link rel="icon" href="/tewke-logo.jpeg" />
        <title>Hello, world!</title>
      </Head>

      <header className="bg-secondary py-5 text-center">
        <h1 className="display-1">Tewke User Dashboard</h1>
        <p className="lead mb-0">Here are your products from our line!</p>
      </header>

      <div className="py-5">
        <div className="h-100  align-items-center py-5 text-center">
          <div className="col-lg-6">
            <Graph />
          </div>
        </div>
      </div>
    </>
  );
}
