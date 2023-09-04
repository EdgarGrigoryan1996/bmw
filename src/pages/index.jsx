import React from 'react';
import Head from "next/head";
import s from "./home.module.css"
import Header from "@/pages/components/header/Header";
import About from "@/pages/components/about/About";
import OurServices from "@/pages/components/ourServices/OurServices";

function Index() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div className={s.homeWrapper}>
               <Header />
                <About />
                <OurServices />
            </div>
        </>

    );
}

export default Index;