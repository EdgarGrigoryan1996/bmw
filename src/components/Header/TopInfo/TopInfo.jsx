import React from 'react';
import s from "./TopInfo.module.css"
import {AiFillPhone} from "react-icons/ai";
import {BiSolidMap} from "react-icons/bi";
import Link from "next/link";
function TopInfo(props) {
    return (
        <div className={s.topInfoWrapper}>
            <div className={s.topInfoBlock}>
                <div className={s.info}>
                    <div className={s.item}><AiFillPhone /> Call us now +(374)55 43-93-11</div>
                    <div className={s.item}>Get Free</div>
                    <div className={s.item}><BiSolidMap /><Link target={"_blank"} href={"https://www.google.com/maps/dir//5th+%26+6th+lines,+Yerevan/@40.1680732,44.5251239,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x406abc8a4f19332d:0x607783ea64c9367e!2m2!1d44.5256651!2d40.1683386?entry=ttu"}>Find us on map</Link> </div>
                </div>
            </div>
        </div>

    );
}

export default TopInfo;