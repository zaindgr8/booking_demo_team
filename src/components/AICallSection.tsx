import React, { useEffect, useRef, useState } from "react";
import { Phone, Play, Pause } from "lucide-react";

const AICallSection = () => {
  const dentalAudioRef = useRef<HTMLAudioElement>(null);
  const dentalSpanishAudioRef = useRef<HTMLAudioElement>(null);
  const dentalEnglishAudioRef = useRef<HTMLAudioElement>(null);
  const hotelAudioRef = useRef<HTMLAudioElement>(null);

  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  const handlePlayPause = (
    audioRef: React.RefObject<HTMLAudioElement>,
    audioId: string
  ) => {
    if (audioRef.current) {
      if (playingAudio === audioId) {
        audioRef.current.pause();
        setPlayingAudio(null);
      } else {
        // Pause any currently playing audio
        if (playingAudio) {
          const currentAudio = document.getElementById(
            playingAudio
          ) as HTMLAudioElement;
          if (currentAudio) {
            currentAudio.pause();
          }
        }
        audioRef.current.play();
        setPlayingAudio(audioId);
      }
    }
  };

  useEffect(() => {
    // Load Fillout script
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <div className="flex items-center justify-center mb-6">
            <Phone className="w-8 h-8 mr-2" />
            <h2 className="text-3xl font-bold text-center mb-4">
              Get an AI Call in Just 5 Minutes
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 mt-4">
            Let our 24/7 AI Agent call you now — it's not just a demo, it's your
            first step into the future of Tech & AI!
          </p>
        </div>

        {/* Audio Samples Section */}
        <div className="mb-12 space-y-8">
          <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">
              Stable Gold Hotel Booking Automation
            </h3>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handlePlayPause(hotelAudioRef, "hotel")}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {playingAudio === "hotel" ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white" />
                )}
              </button>
              <audio
                id="hotel"
                ref={hotelAudioRef}
                src="/audio_samples/stablegold.wav"
              />
              <span className="text-gray-400">
                {playingAudio === "hotel"
                  ? "Click to pause"
                  : "Click to play sample"}
              </span>
            </div>
          </div>

          <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">
              Orasurge Dental Clinic Appointment Automation - English
            </h3>
            <div className="flex items-center space-x-4">
              <button
                onClick={() =>
                  handlePlayPause(dentalEnglishAudioRef, "dental-en")
                }
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {playingAudio === "dental-en" ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white" />
                )}
              </button>
              <audio
                id="dental-en"
                ref={dentalEnglishAudioRef}
                src="/audio_samples/dentalclinic_en.wav"
              />
              <span className="text-gray-400">
                {playingAudio === "dental-en"
                  ? "Click to pause"
                  : "Click to play sample"}
              </span>
            </div>
          </div>

          <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">
              Orasurge Dental Clinic Appointment Automation - Español
            </h3>
            <div className="flex items-center space-x-4">
              <button
                onClick={() =>
                  handlePlayPause(dentalSpanishAudioRef, "dental-es")
                }
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {playingAudio === "dental-es" ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white" />
                )}
              </button>
              <audio
                id="dental-es"
                ref={dentalSpanishAudioRef}
                src="/audio_samples/dentalclinic_es.wav"
              />
              <span className="text-gray-400">
                {playingAudio === "dental-es"
                  ? "Click to pause"
                  : "Click to play sample"}
              </span>
            </div>
          </div>
        </div>

        <div className="fade-in" style={{ minHeight: "500px" }}>
          <div
            style={{ width: "100%", height: "500px" }}
            data-fillout-id="9ozo5hkcnZus"
            data-fillout-embed-type="standard"
            data-fillout-inherit-parameters
            data-fillout-dynamic-resize
          />
        </div>
      </div>
    </section>
  );
};

export default AICallSection;
