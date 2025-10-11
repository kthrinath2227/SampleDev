
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, User, Sparkles } from 'lucide-react';

const qaPairs = {
    "hello": "Hi there! How can I help you today?",
    "services": "We offer Web Development, Mobile App Development, UI/UX Design, E-commerce solutions, and Digital Marketing. What are you interested in?",
    "web development": "Great! We build fast, secure, and scalable websites tailored to your needs. Would you like to see our portfolio or get a quote?",
    "contact": "You can reach us at info@thedevstechnologies.online or call us at +91 9381187905. You can also use the contact form on our website!",
    "pricing": "Our pricing varies depending on the project scope. The best way to get an accurate quote is to contact us with your project details.",
    "process": "Our process involves Discovery, Design, Development, and Deployment. We ensure you're involved at every step!",
    "thanks": "You're welcome! Is there anything else I can help with?",
    "bye": "bye! Have a great day!"
};

const predefinedQuestions = [
    "What services do you offer?",
    "How can I contact you?",
    "Tell me about your process."
];

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: 'bot', text: "Hello! I'm the DevsTech assistant. How can I help you?" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = (text) => {
        const userMessage = text.trim();
        if (!userMessage) return;

        setMessages(prev => [...prev, { from: 'user', text: userMessage }]);
        setInputValue('');

        setTimeout(() => {
            const botResponse = getBotResponse(userMessage.toLowerCase());
            setMessages(prev => [...prev, { from: 'bot', text: botResponse }]);
        }, 1000);
    };

    const getBotResponse = (userInput) => {
        for (const keyword in qaPairs) {
            if (userInput.includes(keyword)) {
                return qaPairs[keyword];
            }
        }
        return "I'm not sure how to answer that. Can you try rephrasing? You can also ask about 'services', 'contact', or 'process'.";
    };

    return (
        <>
            <div className="fixed right-1 bottom-[160px] z-50">
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Open chatbot"
                >
                    <AnimatePresence>
                        {isOpen ? (
                            <motion.div initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: 90 }}>
                                <X className="w-8 h-8 text-white" />
                            </motion.div>
                        ) : (
                            <motion.div initial={{ scale: 0, rotate: 90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: -90 }}>
                                <Bot className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed bottom-[100px] right-[10px] w-[360px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border"
                    >
                        <header className="p-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white flex items-center gap-3">
                            <Bot className="w-7 h-7" />
                            <div>
                                <h3 className="font-bold text-lg">DevsTech Assistant</h3>
                                <p className="text-xs opacity-80">Online</p>
                            </div>
                            <X size={20} className='ml-20'  onClick={() => setIsOpen(false)} />
                        </header>
                        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                            <div className="space-y-4">
                                {messages.map((msg, index) => (
                                    <div key={index} className={`flex gap-3 items-end ${msg.from === 'bot' ? 'justify-start' : 'justify-end'}`}>
                                        {msg.from === 'bot' && (
                                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0">
                                                <Bot size={20} />
                                            </div>
                                        )}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                            className={`max-w-xs px-4 py-2 rounded-2xl ${msg.from === 'bot' ? 'bg-white border rounded-bl-none' : 'bg-blue-500 text-white rounded-br-none'}`}
                                        >
                                            <p className="text-sm leading-relaxed">{msg.text}</p>
                                        </motion.div>
                                         {msg.from === 'user' && (
                                            <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center flex-shrink-0">
                                                <User size={20} />
                                            </div>
                                        )}
                                    </div>
                                ))}
                                {messages.length === 1 && (
                                  <div className="pt-4 border-t mt-4">
                                      <p className="text-xs text-gray-500 mb-2 flex items-center gap-1.5"><Sparkles size={14} className="text-blue-500" /> Or try one of these:</p>
                                      <div className="flex flex-wrap gap-2">
                                          {predefinedQuestions.map(q => (
                                              <button key={q} onClick={() => handleSendMessage(q)} className="px-3 py-1.5 text-xs bg-white border rounded-full hover:bg-blue-50 transition-colors">
                                                  {q}
                                              </button>
                                          ))}
                                      </div>
                                  </div>
                                )}
                                <div ref={chatEndRef}></div>
                            </div>
                        </div>
                        <div className="p-3 bg-white border-t">
                            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }} className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-2 rounded-full bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button type="submit" className="w-10 h-10 flex-shrink-0 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors">
                                    <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
