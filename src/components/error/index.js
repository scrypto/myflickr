import React from 'react';
import style from './style.scss';

const Error = (props) => (
    <div className="error">
        {props.message}
    </div>
);

export default Error;