import { useState } from "react";
import { AiFillWechat } from "react-icons/ai";
import ChatbotPopup from "./ChatBotPopup"; // adjust the path accordingly

const FloatingChatButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <button
                onClick={() => setIsOpen(true)}
                className="bg-[#dd8036] hover:bg-[#794318] text-white p-4 rounded-full shadow-lg transition"
            >
                <AiFillWechat size={35} />
            </button>

            <ChatbotPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
};

export default FloatingChatButton;
