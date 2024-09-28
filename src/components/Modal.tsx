"use client";

import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="relative">
                <button 
                    className="absolute top-0 right-0 p-2 text-white"
                    onClick={onClose}
                    >
                    &times;
                </button>
                <img 
                    src={imageSrc} 
                    alt="Project" 
                    className="max-w-full max-h-screen rounded-lg shadow-lg" 
                />
            </div>
        </div>
    );
};

export default Modal;
