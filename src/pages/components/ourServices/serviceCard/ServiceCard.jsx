import React from 'react';
import s from "@/pages/components/ourServices/OurServices.module.css";
import Image from "next/image";
import oilImg from "@/assets/images/oil.webp";

function ServiceCard(props) {
    return (
        <div className={s.serviceCard}>
            <div className={s.serviceImg}>
                <Image src={props.src} alt={props.alt} />
            </div>
            <div className={s.serviceTitle}>
                <h3>{props.title}</h3>
            </div>
            <div className={s.serviceDesc}>
                <p>
                    {props.desc}
                </p>
            </div>
        </div>
    );
}

export default ServiceCard;