import React from 'react';
import Head from "next/head";
import Header from "@/components/Header/Header";
import s from "@/pages/components/ourServices/OurServices.module.css";
import ServiceCard from "@/pages/components/ourServices/serviceCard/ServiceCard";
import oilImg from "@/assets/images/oil.webp";
import diagnosticImg from "@/assets/images/diagnostic.webp";
import enginesImg from "@/assets/images/engines.webp";
import brakesImg from "@/assets/images/brakes.webp";
import transmissionImg from "@/assets/images/transmission.webp";
import wheelsImg from "@/assets/images/wheels.webp";
import TopTitle from "@/components/topTitle/TopTitle";

function Index(props) {
    return (
        <>
            <Head>
                <title>Services</title>
            </Head>
            <section className={s.ourServices}>
                <div className={s.title}>
                    <div>
                        <TopTitle text="WHAT WE DO" />
                        <h2>OUR SERVICES</h2>
                    </div>
                </div>
                <div className={s.content}>
                    <ServiceCard src={oilImg} alt="Oil" title="oil changes" desc="Vehicle maintenance is extremely important and the easiest thing a vehicle owner can do is get the oil changed."/>
                    <ServiceCard src={diagnosticImg} alt="Diagnostic" title="Diagnostic" desc="Our certified technicians use the latest diagnostic equipment to service and repair your vehicles."/>
                    <ServiceCard src={enginesImg} alt="Engines" title="Engines" desc="We use state-of-the-art scan tool equipment to perform engine diagnostics and repair."/>
                    <ServiceCard src={brakesImg} alt="Brakes" title="Brakes" desc="If you have any doubts regarding the current condition of your brakes, it's best to call or pay a visit us."/>
                    <ServiceCard src={transmissionImg} alt="Transmissions" title="Transmissions" desc="If you want your car to be in top shape, you have to a good care of its transmission system."/>
                    <ServiceCard src={wheelsImg} alt="Tires & Wheels" title="Tires & Wheels" desc="Our wheel alignment service will give you the best driving experience."/>
                </div>
            </section>
        </>

    );
}

export default Index;