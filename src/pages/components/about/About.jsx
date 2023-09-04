import React from 'react';
import s from "./About.module.css"
import aboutImage from "../../../assets/images/aboutImage.webp"
import Image from "next/image";
import TopTitle from "@/components/topTitle/TopTitle";
import {GiCarKey} from "react-icons/gi";
function About() {
    return (
        <section className={s.about}>
            <div className={s.imageBlock}>

                <div className={s.sertificate}>
                    <div>
                        <GiCarKey />
                    </div>
                    <div>
                        <GiCarKey />
                    </div>
                    <div>
                        <GiCarKey />
                    </div>
                </div>
            </div>
            <div className={s.contentBlock}>
                <TopTitle text="CAR SERVICES WITH YOU IN MIND"/>
                <h2>WE ARE A PROFESSIONAL AUTO REPAIR SERVICE</h2>
                <p>
                    Macchina is a well-established auto repair shop in Manhattan, New York. Our company offers car maintenance to major repairs since 1972. We are a company that has built its reputation on reliable services for all times of vehicles in Manhattan, New York.
                </p>
            </div>
        </section>
    );
}

export default About;