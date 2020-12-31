import React from "react";
import {Button} from "antd";

export default function MainButton() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <Button onClick={handleClick}>Log react event</Button>
    )
}

