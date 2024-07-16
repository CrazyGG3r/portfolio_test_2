'use client';
import { useState } from 'react';

export default function TextHoverBox({ phrases }) {
    const [currentText, setCurrentText] = useState(phrases[0]);
    const [hasBeenHovered, setHasBeenHovered] = useState(false);

    const handleMouseEnter = () => {
        if (hasBeenHovered) {
            const randomIndex = Math.floor(Math.random() * phrases.length);
            setCurrentText(phrases[randomIndex]);
        } else {
            setHasBeenHovered(true);
        }
    };

    return (
        <div
            className="m-2 p-4 rounded-b-3xl rounded-t-2xl transition duration-300 ease-in-out group transform hover:scale-105 bg-fuchsia-950 hover:bg-fuchsia-400"
            onMouseEnter={handleMouseEnter}
        >
            <p className="transition duration-300 ease-in-out text-transparent group-hover:text-fuchsia-950">
                {currentText}
            </p>
        </div>
    );
}