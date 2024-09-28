"use client";

export default function Video() {
    return (
        <div className="w-11/12 animate-fade-in delay-500">
            <video 
                className="w-full h-auto rounded-lg shadow-lg" 
                src="/videos/web_development.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
            />
        </div>
    );
}
