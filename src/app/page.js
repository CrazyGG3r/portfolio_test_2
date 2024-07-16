// app/page.js
'use client';

import { useState, useEffect } from 'react';
import HoverBox from '../components/HoverBox';
import {all} from "three/nodes";
import mathNode from "three/addons/nodes/math/MathNode";

export default function Home() {
    const [boxes, setBoxes] = useState([]);
    const [currentLevel, setCurrentLevel] = useState(0);
    const [boxHistory, setBoxHistory] = useState([]);

    useEffect(() => {
            const generateBoxes = () => {
                const allPhrases = [
                    "Welcome to My Portfolio",
                    "My name is Shaheer Ul Islam",
                    "I live in Pakistan, Karachi",
                    "I have hardcoded every skill",
                    "Also have hardcoded every project's github link",
                    "My method to prevent someone else copying",
                    "I love creative coding",
                    "Web development is not fun",
                    "JavaScript is a retarded language",
                    "JS, NextJS, ReactJS, NodeJS, Express JS",
                    "keep at 100% zoom for the best experience",
                    "I hate JS",
                    "I was born 5th Oct'02",
                    "Websites are a menace to society",
                    "Responsive designs can swing from my pole",
                    "Performance is not the key",
                    "Quality over Quantity",
                    "Feel free to leave your review",
                    "You should Hire me",
                    "Coffee fuels code",
                    "Collaboration is essential",
                    "Yeah tell me its a bad design.",
                    "Keep searching for my name if you haven't found it yet",
                    "Mai Laihf and Mai code. Always trash",
                    "If a green button did not spawn, its not your day",
                ];
                const skillPhrase = [
                    "Onwards ->",
                    "What have i done :( -> ",
                    "Things that i am not proud of ->",
                    "I wish I spent more time with family ->",
                    "Computer Science is fun only if its not webdev ->",
                    "You better hire me after this ->",
                    "How to hardcode everything -> ",
                ]

                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;
                const boxWidth = 200;
                const boxHeight = 100;

                const columns = Math.floor(windowWidth / boxWidth);
                const rows = Math.floor(windowHeight / boxHeight);
                const totalBoxes = columns * rows;

                const newBoxes = [];
                for (let i = 0; i < totalBoxes; i++) {
                    const start = Math.random() * allPhrases.length;
                    const end = Math.random() * allPhrases.length;
                    const boxType = Math.random() < 0.95 ? 'text' : 'nested' ;
                    const boxPhrases = (boxType === 'nested' ? skillPhrase: allPhrases.slice((start < end ? start: end),(start > end ? start: end)));


                    newBoxes.push({
                        id: i,
                        type: boxType,
                        phrases: boxPhrases,
                        imageUrl: boxType === 'image' ? '/testing.png' : null,
                        redirectUrl: boxType === 'image' ? '/some-link' : null,
                        nestedBoxes: boxType === 'nested' ? generateNestedBoxes() : null,
                        bgColor: 'bg-emerald-950',
                        hoverColor: 'bg-emerald-400',
                        textColor: 'text-emerald-950'
                    });
                }
                return newBoxes;
            };
            const random_range = (min,max) =>
            {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            const skilllist = [
                ["Java", "bg-amber-950", "bg-amber-400"],
                ["JavaScript", "bg-yellow-950", "bg-yellow-400"],
                ["Python", "bg-blue-950", "bg-blue-400"],
                ["C++", "bg-green-950", "bg-green-400"],
                ["Ruby", "bg-red-950", "bg-red-400"],
                ["Go", "bg-teal-950", "bg-teal-400"],
                ["Rust", "bg-orange-950", "bg-orange-400"],
                ["Swift", "bg-purple-950", "bg-purple-400"],
                ["Kotlin", "bg-indigo-950", "bg-indigo-400"],
                ["PHP", "bg-pink-950", "bg-pink-400"]
            ];


            const generateNestedBoxes = () => {
                const nestedBoxCount = 4    ; // 3x3 grid
                const nestedBoxes = [];

                const nestedPhrases = [
                    "You found a nested box!",
                    "Go deeper",
                    "Nested content here",
                    "Another level",
                    "Keep exploring",
                ];
                nestedBoxes.push({
                    id: 'back-box',
                    type: 'back',
                    phrases: ['Go Back'],
                    bgColor: 'bg-gray-950',
                    hoverColor: 'bg-gray-400',
                    textColor: 'text-gray-950'
                });


                for (let i = 0; i < nestedBoxCount; i++) {
                    // For this example, we'll make most boxes text boxes, with a small chance of nested or image
                    const boxType = Math.random() < 0.7 ? 'text' : (Math.random() < 0.9 ? 'text' : 'text');

                    const shuffledPhrases = [...nestedPhrases].sort(() => 0.5 - Math.random());
                    const boxPhrases = shuffledPhrases.slice(0, 3); // Fewer phrases for nested boxes

                    nestedBoxes.push({
                        id: `nested-${i}`,
                        type: boxType,
                        phrases: boxPhrases,
                        imageUrl: boxType === 'image' ? '/nested-image.jpg' : null,
                        redirectUrl: boxType === 'image' ? '/nested-link' : null,
                        nestedBoxes: boxType === 'nested' ? generateNestedBoxes() : null, // Recursive for nested types
                        bgColor: `bg-blue-${500 + (i * 100)}`, // Varying shades of blue
                        hoverColor: `bg-blue-${400 + (i * 100)}`,
                        textColor: 'text-white'
                    });
                }

                return nestedBoxes;
            };
            const initialBoxes = generateBoxes();
            setBoxes(initialBoxes);
            setBoxHistory([initialBoxes]);

            window.addEventListener('resize', () => {
                const newBoxes = generateBoxes();
                setBoxes(newBoxes);
                setBoxHistory([newBoxes]);
                setCurrentLevel(0);
            });

            return () => window.removeEventListener('resize', generateBoxes);
        },
        []);

    const handleNestedClick = (nestedBoxes, isBackAction = false) => {
        if (isBackAction) {
            if (currentLevel > 0) {
                const newHistory = boxHistory.slice(0, -1);
                setBoxHistory(newHistory);
                setBoxes(newHistory[newHistory.length - 1]);
                setCurrentLevel(currentLevel - 1);
            }
        } else {
            setBoxes(nestedBoxes);
            setCurrentLevel(currentLevel + 1);
            setBoxHistory([...boxHistory, nestedBoxes]);
        }
    };

    const handleBackClick = () => {
        if (currentLevel > 0) {
            const newHistory = boxHistory.slice(0, -1);
            setBoxHistory(newHistory);
            setBoxes(newHistory[newHistory.length - 1]);
            setCurrentLevel(currentLevel - 1);
        }
    };

    return (
        <main className="min-h-screen bg-gray-100 p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {boxes.map((box) => (
                    <HoverBox
                        key={box.id}
                        type={box.type}
                        phrases={box.phrases}
                        imageUrl={box.imageUrl}
                        redirectUrl={box.redirectUrl}
                        onNestedClick={() => box.type === 'back'
                            ? handleNestedClick(null, true)
                            : box.nestedBoxes && handleNestedClick(box.nestedBoxes)}
                        bgColor={box.bgColor}
                        hoverColor={box.hoverColor}
                        textColor={box.textColor}
                    />
                ))}
            </div>
        </main>
    );
}