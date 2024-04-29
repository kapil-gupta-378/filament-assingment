import OverviewTemplate from "@/design-systems/Templates/overview-template";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <OverviewTemplate />;
    </>
  );
}
