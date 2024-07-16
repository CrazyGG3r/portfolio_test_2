'use client';
import { useState } from 'react';

export default function NestedHoverBox({ phrases, onNestedClick, bgColor, hoverColor, textColor }) {
    const [currentText, setCurrentText] = useState(phrases[0]);

    const handleMouseEnter = () => {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        setCurrentText(phrases[randomIndex]);
    };

    return (
        <div
            className={`m-2 p-4 rounded-b-3xl rounded-t-2xl transition duration-300 ease-in-out group transform hover:scale-105 cursor-pointer ${bgColor} hover:${hoverColor}`}
            onMouseEnter={handleMouseEnter}
            onClick={onNestedClick}
        >
            <p className={`transition duration-300 ease-in-out text-transparent group-hover:${textColor}`}>
                {currentText}
            </p>
        </div>
    );
}