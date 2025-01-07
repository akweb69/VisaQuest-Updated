// FAQ.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa';
import faq from "../assets/images/Questions-pana.png"
import { useLocation } from 'react-router';

const FAQ = ({ darkMode }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const location = useLocation();
    const [full, setFull] = useState(false)
    useEffect(() => {
        if (location.pathname === "/faq") {
            setFull(true)
        }
    }, [location])
    const questions = [
        {
            question: 'What is your return policy?',
            answer: 'Our return policy lasts 30 days. You can return items within this period.'
        },
        {
            question: 'How can I contact support?',
            answer: 'You can contact support via email or phone.'
        },
        {
            question: 'Do you offer international shipping?',
            answer: 'Yes, we offer international shipping to most countries.'
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept Visa, MasterCard, PayPal, and bank transfers.'
        },
        {
            question: 'Is it safe to shop on your website?',
            answer: 'Yes, we use SSL encryption to ensure secure transactions.'
        },
        {
            question: 'How long will my order take to arrive?',
            answer: 'Orders typically arrive within 5-7 business days, depending on your location.'
        },

    ];

    return (
        <div className={`w-full mx-auto ${!darkMode ? "bg-[rgb(0,0,77)]" : ""}  ${full && "min-h-screen"}`}>
            <div className="w-11/12 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-transparent bg-gradient-to-r from-pink-500 font-quest via-purple-500 to-blue-500 py-14 bg-clip-text text-3xl md:text-5xl font-bold text-center"
                >
                    Frequently Asked Questions
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5  ">
                    <div className="flex justify-center  items-start">
                        <img
                            src={faq}
                            alt="FAQ Illustration"
                            className="w-full md:w-1/2 "
                        />
                    </div>

                    <div className="space-y-4 ">
                        {questions.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`border-b border-gray-300 pb-4 ${!darkMode ? "text-white" : ""}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div
                                    className="flex items-center cursor-pointer font-semibold text-lg"
                                    onClick={() => handleToggle(index)}
                                >
                                    <FaQuestionCircle className="mr-3 text-xl" />
                                    <span>{item.question}</span>
                                </div>
                                {activeIndex === index && (
                                    <motion.div
                                        className="mt-3 text-gray-600 pl-8"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {item.answer}
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
