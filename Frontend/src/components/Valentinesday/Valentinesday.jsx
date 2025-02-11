import React, { useRef, useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Yes from '../Yes/Yes';

// Import songs correctly
import teriOre from '../../assets/Audio/teriOre.mp3';
import subhanallah from '../../assets/Audio/subhanallah.mp3';
import titli from '../../assets/Audio/titli.mp3';

export default function Valentinesday() {
    const songs = [teriOre, subhanallah, titli]; // Array of songs
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [showYes, setShowYes] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            try {
                audioRef.current.play();
            } catch (error) {
                console.warn("Autoplay blocked by browser:", error);
            }
        }
    }, [currentSongIndex]);

    const changeSong = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    };

    if (showYes) {
        return <Yes />; // Renders the Yes component when "Yes" is clicked
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen mb-16">
            {/* Valentine's Animation */}
            <DotLottieReact
                src="https://lottie.host/bfa3e7ad-d44f-4137-8d4d-3427ee8a79cc/oRT2Gn1K5K.lottie"
                loop
                autoplay
            />

            {/* Hidden Audio Element */}
            <audio ref={audioRef} src={songs[currentSongIndex]} loop />

            <h1 className="text-3xl font-bold mt-4 text-red-600 text-center mb-6">
                Will you be my Valentine! ❤️ 🥹
            </h1>

            {/* Yes/No Buttons */}
            <div className='flex gap-4'>
                <button
                    onClick={() => setShowYes(true)}
                    className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
                >
                    Yes
                </button>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    onClick={() => alert("🥲 Areeeee... Think Again.. Mere Jaisa green flag nahi milega😌")}
                >
                    No
                </button>
            </div>

            {/* Music Controls */}
            <div className='flex justify-center mt-6 gap-5'>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                    onClick={() => audioRef.current.pause()}
                >
                    Stop Music ⏸️
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                    onClick={() => audioRef.current.play()}
                >
                    Play Again ▶️
                </button>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    onClick={changeSong}
                >
                    Change Song 🔄
                </button>
            </div>
        </div>
    );
}
