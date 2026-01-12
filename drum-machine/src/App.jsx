import { soundsStore } from "./data/sounds";
import { useState, useEffect, useCallback } from "react";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [sounds, setSounds] = useState(soundsStore);
  const [display, setDisplay] = useState("Sound Played");
  const [volume, setVolume] = useState(0.3);

  const playSound = useCallback(
    (soundId, soundText) => {
      const audio = document.getElementById(soundId);
      if (audio) {
        audio.currentTime = 0;
        audio.volume = volume;
        audio.play().catch((err) => console.log(err));
        setDisplay(soundText);
      }
    },
    [volume]
  );

  const handleVolume = (e) => {
    setVolume(e.target.value);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toUpperCase();
      const sound = sounds.find((s) => s.id === key);
      if (sound) {
        playSound(sound.id, sound.text);
        const button = document.getElementById(sound.text);
        button.classList.add("active");
        console.log(button);

        setTimeout(() => {
          button.classList.remove("active");
        }, 100);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [sounds, playSound]);

  return (
    <div id="drum-machine" className="drum-machine">
      <div className="drum-pad-container">
        {sounds.map((sound) => {
          return (
            <button
              key={sound.id}
              id={sound.text}
              onClick={() => playSound(sound.id, sound.text)}
              className="drum-pad"
            >
              {sound.id}
              <audio id={sound.id} src={sound.url} className="clip" />
            </button>
          );
        })}
      </div>

      <div id="display" className="display">
        {display}
      </div>

      <div className="volume-slide">
        <label>Volume: {Math.round(volume * 100)}</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          className="range"
          value={volume}
          onChange={handleVolume}
        />
      </div>
    </div>
  );
};

export default App;
