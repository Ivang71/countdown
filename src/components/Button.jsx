import React from "react";

export default function Button() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }
    return (
        <button onClick={handleClick}>Log react event</button>
    )
}

