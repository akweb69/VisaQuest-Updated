import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        role: "Software Engineer",
        feedback: "Visa Quest made my visa application process so smooth and easy. Highly recommended!",
        image: "https://i.ibb.co.com/0CcCWj3/my.png",
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Digital Marketer",
        feedback: "Amazing service! I got my visa in no time. Professional and supportive team!",
        image: "https://i.ibb.co.com/0CcCWj3/my.png",
    },
    {
        id: 3,
        name: "Mike Wilson",
        role: "Entrepreneur",
        feedback: "The team at Visa Quest is very knowledgeable and helped me with all my queries!",
        image: "https://i.ibb.co.com/0CcCWj3/my.png",
    },
    {
        id: 4,
        name: "Emily Brown",
        role: "Travel Blogger",
        feedback: "Thanks to Visa Quest, I could finally take my dream trip without any hassle!",
        image: "https://i.ibb.co.com/0CcCWj3/my.png",
    },
    {
        id: 5,
        name: "Chris Green",
        role: "Freelancer",
        feedback: "I can't believe how quick and easy the process was. Highly impressed!",
        image: "https://i.ibb.co.com/0CcCWj3/my.png",
    },
    {
        id: 6,
        name: "Sophia Lee",
        role: "Teacher",
        feedback: "Visa Quest is truly a lifesaver. I got my visa without any complications!",
        image: "https://i.ibb.co.com/0CcCWj3/my.png",
    },
];

const Testimonials = ({ darkMode }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 1
        );
    };

    return (
        <div
            className={` py-14 ${darkMode ? "bg-gray-100" : "bg-[rgb(0,0,66)] text-white"}`}
        >
            <div className="w-11/12 mx-auto">
                {/* Title and Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-transparent bg-gradient-to-r from-pink-500 font-quest via-purple-500 to-blue-500 pb-2 bg-clip-text text-3xl md:text-5xl font-bold text-center"
                >
                    What Our Clients Say
                </motion.div>
                <p
                    className={`text-center pb-12 ${darkMode ? "text-gray-600" : "text-gray-300"
                        }`}
                >
                    Here's what our happy clients have to say about us.
                </p>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className={`bg-[rgb(0,0,56)] text-white rounded-lg shadow-lg p-6 flex flex-col items-center`}
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full object-cover mb-4"
                            />
                            <h3 className="text-lg font-bold mb-2">{testimonial.name}</h3>
                            <p className="text-sm text-gray-400 mb-4">{testimonial.role}</p>
                            <FaQuoteLeft className="text-indigo-500 text-3xl mb-4" />
                            <p className="italic text-center">{testimonial.feedback}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center items-center mt-6 space-x-4">
                    <button
                        onClick={handlePrev}
                        className="bg-indigo-500 text-white p-3 rounded-full shadow-md hover:bg-indigo-600 focus:outline-none"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-indigo-500 text-white p-3 rounded-full shadow-md hover:bg-indigo-600 focus:outline-none"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
