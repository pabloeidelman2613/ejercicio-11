import React from "react";

export default function Image(props){

        return (<img src={props.src} width={props.size} alt="logoNetflix"></img>);
    };

Image.defaultProps = {
    size: 300
}