import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import style from './style.scss';

const Loading = () => (
    <div className="loading">
        <FaSpinner />
    </div>
);

export default Loading;