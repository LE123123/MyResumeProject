import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Introduce from "#/components/Introduce";
import Experience from "#/components/Experience";
import Footer from "#/components/Footer";
import ScrollTopButton from "#/components/ScrollTopButton";

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:description" content="고웹프 프로젝트입니다."></meta>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <main>
        <Section>
          <Introduce />
          <Experience />
          <Footer />
          <ScrollTopButton />
        </Section>
      </main>
    </>
  );
}
