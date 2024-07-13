"use client";

import Hero from "@/components/layout/hero";
import Head from "next/head";
export default function Home () {
  return (
    <div className="flex flex-col md:px-24 px-10 py-[5.5rem]">
      <Head>
        <title>MiniMiracle</title>
      </Head>
      <Hero>
        <div>
          <h3>
            Kategori
          </h3>
        </div>
      </Hero>
    </div>
  );
}