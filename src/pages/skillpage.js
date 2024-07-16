// src/pages/skillpage.js
import Link from 'next/link';

export default function SkillPage() {
    return (
        <div className="min-h-screen bg-emerald-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-emerald-800 mb-4">My Skills</h1>
            <ul className="text-xl text-emerald-600 mb-8 list-disc">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                {/* Add more skills as needed */}
            </ul>
            <Link href="/public" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">
                Go Back Home
            </Link>
        </div>
    );
}