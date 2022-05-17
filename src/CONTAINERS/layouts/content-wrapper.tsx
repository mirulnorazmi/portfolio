import React from 'react';

export default (props: any) => {
    return (
        <div
            className={props.className}
            style={props.style}
            id={`content_${props.id}`}
        >
            {props.children}
        </div>
    );
};
