
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Building, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const QuoteModal = ({ isOpen, onOpenChange }) => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.businessName || !formData.message) {
            toast({
                title: "Missing Information",
                description: "Please fill in all required fields.",
                variant: "destructive",
            });
            return;
        }

        const whatsappNumber = "919381187905";
        const prefilledText = `Hello! I'd like a free quote.
Business Name: ${formData.businessName}
My Name: ${formData.name}
Phone: ${formData.phone || 'Not provided'}

Project Details:
${formData.message}
`;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(prefilledText)}`;
        window.open(whatsappUrl, '_blank');

        toast({
            title: "Quote Request Sent!",
            description: "We're redirecting you to WhatsApp to finalize your request.",
        });

        onOpenChange(false);
        setFormData({ name: '', businessName: '', phone: '', message: '' });
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    onClick={() => onOpenChange(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: -20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="relative w-full max-w-lg m-4 bg-white rounded-2xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => onOpenChange(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
                        >
                            <X size={24} />
                        </button>
                        
                        <div className="p-8">
                            <h2 className="text-3xl font-bold mb-2 gradient-text">Get a Free Quote</h2>
                            <p className="text-muted-foreground mb-6">Tell us about your project, and we'll get back to you.</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative">
                                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input type="text" name="businessName" placeholder="Business Name *" value={formData.businessName} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input type="text" name="name" placeholder="Your Name *" value={formData.name} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <textarea name="message" placeholder="Tell us about your project... *" rows="4" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                                </div>
                                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl shadow-lg hover:scale-105 transition-transform">
                                    Send Request via WhatsApp <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default QuoteModal;
