import React from 'react';

const ButtonReadMore = (props) => {
    return <a className={"ButtonReadMore"} href={`${props.url}`}>{props.text}</a>
};

export default ButtonReadMore;