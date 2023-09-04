import React from 'react';
import s from "@/pages/home.module.css";
import Image from "next/image";
import topCarImage from "@/assets/images/homeTopImageCar.webp";
import TopTitle from "@/components/topTitle/TopTitle";

function Header(props) {
    return (
        <header className={s.header}>
            <div className={s.titleBlock}>
                <div className={s.topTitle}>
                    <TopTitle text="THE TRUSTED NAME IN AUTO REPAIR"/>
                    <h1>WE CARE ABOUT {'\n'}MORE THAN CAR</h1>
                    <button>Explore our services</button>
                </div>
            </div>
            <div className={s.carImageBlock}>
                <Image src={topCarImage} alt={"Car"} />
            </div>
        </header>
    );
}

export default Header;