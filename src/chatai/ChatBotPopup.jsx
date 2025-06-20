import { useState, useEffect, useRef } from 'react';
import { AiFillWechat } from 'react-icons/ai'; // Icon for the chat button
import { FaTimes } from 'react-icons/fa'; // Icon for the close button

// Main component for the entire chatbot feature
export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false); // Manages the visibility of the chat panel
    const [userMessage, setUserMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const chatboxRef = useRef(null); // Ref to the messages container for auto-scrolling

    // Effect to auto-scroll to the latest message
    useEffect(() => {
        if (chatboxRef.current) {
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }
    }, [messages]);

    // Function to handle sending a message to the Rasa backend
    const sendMessage = async () => {
        if (!userMessage.trim()) return;

        const newMessage = { sender: "user", message: userMessage };
        setMessages((prev) => [...prev, newMessage]);
        setUserMessage("");
        setLoading(true);

        // Show a typing indicator immediately
        setMessages((prev) => [...prev, { sender: "bot", message: "__typing__" }]);

        try {
            // Your existing fetch logic to communicate with Rasa
            const response = await fetch("https://12a2-2404-c0-4340-00-10af-24e.ngrok-free.app/webhooks/rest/webhook", {
                // const response = await fetch("https://12a2-2404-c0-4340-00-10af-24e.ngrok-free.app/webhooks/rest/webhook", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    sender: "user",
                    message: newMessage.message
                })
            });

            const data = await response.json();
            const rasaMessages = data.map((msg) => ({
                sender: "bot",
                message: msg.text || "[No response text]"
            }));

            // Replace the typing indicator with the actual bot response(s)
            setMessages((prev) => [
                ...prev.filter((msg) => msg.message !== "__typing__"),
                ...rasaMessages
            ]);
        } catch (error) {
            console.error("Error connecting to Rasa:", error);
            // Replace typing indicator with an error message
            setMessages((prev) => [
                ...prev.filter((msg) => msg.message !== "__typing__"),
                { sender: "bot", message: "Sorry, I'm having trouble connecting. Please try again later." },
            ]);
        } finally {
            setLoading(false); // Re-enable the input field
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {/* Floating Chat Icon - Toggles the chat panel */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#dd8036] hover:bg-[#794318] text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
                aria-label="Toggle Chat Assistant"
            >
                <AiFillWechat size={33} />
            </button>

            {/* Chat Modal / Panel - Appears when isOpen is true */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-80 sm:w-96 h-[500px] bg-white text-gray-800 rounded-lg shadow-xl flex flex-col border border-gray-200 animate-fadeIn">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-[#794318] text-white rounded-t-lg">
                        <h3 className="font-semibold">SmartPharm Assistant</h3>
                        <button onClick={() => setIsOpen(false)} aria-label="Close chat">
                            <FaTimes className="hover:text-gray-300" />
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div ref={chatboxRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
                        {messages.length === 0 ? (
                            <div className="bg-gray-100 p-3 rounded-lg max-w-[85%]">
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Hello!🙋‍♀️<br />
                                    <span className="font-semibold">I'm SmartPharm, your virtual health assistant.</span><br />
                                    Ask me anything about our medicines, services, or prices!
                                </p>
                            </div>
                        ) : (
                            messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`text-sm rounded-lg inline-block max-w-[85%] whitespace-pre-line px-3 py-2 shadow-sm ${msg.sender === "user"
                                        ? "bg-[#A67C52] text-white"
                                        : msg.message === "__typing__"
                                            ? "bg-gray-200 text-gray-500 italic"
                                            : "bg-gray-100 text-gray-800"
                                        }`}>
                                        {msg.message === "__typing__" ? "SmartPharm is typing..." : msg.message}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Input Box */}
                    <div className="p-3 border-t border-gray-200 flex items-center gap-2 bg-white">
                        <input
                            type="text"
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && !loading && sendMessage()}
                            placeholder="Type your message..."
                            disabled={loading} // Disable input while waiting for a response
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A67C52] disabled:bg-gray-200"
                        />
                        <button
                            onClick={sendMessage}
                            disabled={!userMessage.trim() || loading} // Disable button if no message or while loading
                            className={`px-4 py-2 rounded-md font-medium text-white transition-colors ${!userMessage.trim() || loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-[#A67C52] hover:bg-[#7B5D4F]"
                                }`}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}