import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { teriOre } from '../../assets/Audio';
import { useRef, useEffect } from 'react';


export default function Valentinesday() {
    const audioRef = useRef(null);

    useEffect(() => {
      // Play music when the component is mounted
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, []);

  return (
    <div>
        <DotLottieReact
            src="https://lottie.host/bfa3e7ad-d44f-4137-8d4d-3427ee8a79cc/oRT2Gn1K5K.lottie"
            loop
            autoplay
        />

         {/* Hidden Audio Element */}
            <audio ref={audioRef} src={teriOre} loop />

            <h1 className="text-3xl font-bold mt-4 text-red-600 text-center">Happy Valentine's Day! ❤️</h1>
            <p className="text-lg text-gray-700 text-center">Enjoy the moment with this beautiful animation and music.</p>

            {/* Stop Music Button (Optional) */}
            <div className='flex justify-center mb-16 gap-5'>
                <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 "
                onClick={() => audioRef.current.pause()}
                >
                Stop Music
                </button>
                <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 "
                onClick={() => audioRef.current.play()}
                >
                Play Again
                </button>
            </div>
    </div>
  )
}


