import React from 'react';
import s from "./Footer.module.css"
import TopTitle from "@/components/topTitle/TopTitle";
import footerImg from "../../assets/images/footerImg.webp"
import Image from "next/image";
import {BiSolidMap, BiSolidTime} from "react-icons/bi";
import {AiOutlineFieldTime} from "react-icons/ai";
import Link from "next/link";
function Footer(props) {
    return (
        <footer className={s.footer}>
            <div className={s.footerTop}>
                <div className={s.contact}>
                    <TopTitle text="CAR REPAIRS AND MAINTENANCE"/>
                    <h2>Call us now</h2>
                    <h2>+(374)55 43-93-11</h2>
                </div>
                <div className={s.footerImg}>
                    <Image src={footerImg} alt="Mechanic"/>
                    <div className={s.footerLine}></div>
                </div>
            </div>
            <div className={s.info}>
                <div className={s.address}>
                    <BiSolidMap /><h6><Link href="https://www.google.com/maps/dir//5th+%26+6th+lines,+Yerevan/@40.1680732,44.5251239,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x406abc8a4f19332d:0x607783ea64c9367e!2m2!1d44.5256651!2d40.1683386?entry=ttu" target="_blank">NEW YORK, 1286 RUUMU MANOR</Link></h6>
                </div>
                <div className={s.workTimes}>
                    <BiSolidTime />
                    <div>
                        <h6>MON – FRI: 8:30 AM – 6:00 PM</h6>
                        <h6>SAT: 8:30 AM – 2:00 PM</h6>
                    </div>
                </div>
            </div>
            <div className={s.copyRight}>
                <p>© 2023 AUTO-SERVICE BM808 ALL RIGHTS RESERVED</p>
            </div>
        </footer>
    );
}

export default Footer;