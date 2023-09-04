import React from 'react';
import s from "./TopTitle.module.css"

function TopTitle(props) {
    return (
        <h6 className={s.topTitle}>{props.text}</h6>
    );
}

export default TopTitle;