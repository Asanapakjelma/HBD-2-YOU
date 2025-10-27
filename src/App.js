import React, { useEffect, useRef } from 'react';
import './Birthday.css';

function App() {
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = 1.0; // set volume to 100%
            audio.loop = true;
            const playAudio = () => {
                audio.play().catch((e) => {
                    console.log('Autoplay failed:', e);
                });
            };
            playAudio();
            document.addEventListener('click', playAudio);
        }
    }, []);

    return (
        <div className="luxury-bg">
            <audio ref={audioRef} src={process.env.PUBLIC_URL + "/birthday.mp3"} autoPlay loop />
            <div className="birthday-container luxury-card">
                <div className="luxury-glow"></div>
                <div className="title-container">
                    <div className="gift-wrapper left">
                        <div className="gift-decoration">
                            <div className="gift-box">🎁</div>
                            <div className="gift-lid">🎀</div>
                            <div className="gift-surprise">✨</div>
                        </div>
                    </div>
                    <h1 className="title luxury-title">Happy Birthday!</h1>
                    <div className="gift-wrapper right">
                        <div className="gift-decoration">
                            <div className="gift-box">🎁</div>
                            <div className="gift-lid">🎀</div>
                            <div className="gift-surprise">✨</div>
                        </div>
                    </div>
                </div>
                <p className="subtitle luxury-subtitle">
                    Milad Mubarak! Semoga Allah memanjangkan usiamu dalam keberkahan,diberikan rezeki yang berlimpah, memberikan kebahagiaan tiada henti, dan senyum manismu selalu menjadi inspirasi. <span role="img" aria-label="love">💖</span>
                </p>
                <div className="cake luxury-cake">
                    <img src={process.env.PUBLIC_URL + "/cake.png"} alt="Luxury Birthday Cake" className="cake-image" />
                    <div className="cake-sparkles"></div>
                </div>
                <div className="luxury-footer">With all my heart, just for you.</div>
            </div>
        </div>
    );
}

export default App;