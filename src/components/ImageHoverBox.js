'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function ImageHoverBox({ imageUrl, redirectUrl }) {
    return (
        <Link href={redirectUrl}>
            <div className="m-2 p-4 rounded-b-3xl rounded-t-2xl transition duration-300 ease-in-out group transform hover:scale-105 bg-blue-950 hover:bg-blue-400">
                {/*m-2 p-4 rounded-b-3xl rounded-t-2xl transition duration-300 ease-in-out group transform hover:scale-105 bg-fuchsia-950 hover:bg-fuchsia-400*/}
                <div className="w-full h-full relative">
                    <Image
                        src={imageUrl}
                        alt="Hover image"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                </div>
            </div>
        </Link>
    );
}