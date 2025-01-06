import React, { useEffect, useState } from 'react';
import VisaCard from './VisaCard';

const LatestVisa = ({ darkMode }) => {
    const [visaData, setVisaData] = useState([]);
    useEffect(() => {
        fetch("https://visa-quest-server.vercel.app/visas")
            .then(res => res.json())
            .then(data => {
                setVisaData(data)
                console.log(data)
            })
    }, [])
    if (visaData.length > 8) {
        const newVisaData = visaData.slice(0, 8);
        setVisaData(newVisaData);
    }
    return (
        <div className={`w-full min-h-screen ${!darkMode ? "bg-[rgb(0,0,31)]" : "bg-white"} flex justify-center items-center`}>
            <div className="w-11/12 mx-auto   flex flex-col  items-center ">
                <div className="text-transparent bg-gradient-to-r from-pink-500 font-quest via-purple-500 to-blue-500 py-14  bg-clip-text text-3xl md:text-5xl font-bold">
                    Latest Visas
                </div>
                <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-6 md:space-y-0 w-full">
                    {
                        visaData?.map(visa => <VisaCard darkMode={darkMode} key={visa._id} visa={visa}></VisaCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LatestVisa;