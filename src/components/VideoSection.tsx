"use client";

export default function Video() {
    return (
        <div className="w-full p-16 bg-gradient-to-r from-gray-100 to-gray-200">
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
