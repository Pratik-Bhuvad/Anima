import React, { useState, useRef, useEffect } from 'react';
import Dwnbtn from '../Components/Dwnbtn';

const Download = ({ ep }) => {

    const episodeNumbers = Array.from({ length: ep }, (_, index) => index + 1);

    const [show, setShow] = useState(true);
    const [height, setHeight] = useState('auto');
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            const contentHeight = contentRef.current.scrollHeight;
            setHeight(show ? `${contentHeight}px` : '0px');
        }
    }, [show]);

    const handleToggle = () => {
        if (contentRef.current) {
            const contentHeight = contentRef.current.scrollHeight;
            setHeight(show ? '0px' : `${contentHeight}px`);
            setShow(!show);
        }
    };

    return (
        <div className="h-auto mx-auto flex flex-col items-center bg-[#2a2b2e] py-5 md:w-[95%] xl:px-7 *:py-2">
            <button className="flex items-center justify-evenly w-1/4 font-semibold h-10 xl:w-[12%] xl:text-xl" onClick={handleToggle} >
                <i className={`fa-solid fa-angle-${show ? 'down' : 'up pt-[5px]'} fa-lg`}></i>
                The First Chapter
            </button>

            <div ref={contentRef} style={{ height: height, overflow: 'hidden', transition: 'height 0.3s ease-in-out' }} className="w-full *:py-5" >
                <div className="w-full px-4 flex items-center justify-between xl:px-0 *:flex *:flex-col-reverse *:items-center *:justify-between *:text-sm *:text-center *:md:flex-row *:xl:w-1/4 *:xl:text-lg">
                    <div className="watchguide md:w-1/6 lg:w-[12%] xl:!w-[8%] *:my-1 xl:*:m-0">
                        Watch guide
                        <i className="fa-solid fa-circle-question"></i>
                    </div>
                    <div className="w-3/4 *:my-1 md:w-1/2 lg:w-[37%] xl:*:m-0">
                        The 16th episode will be broadcast one week late
                        <i className="fa-regular fa-bell pt-1"></i>
                    </div>
                </div>

                <div id="download_links" className="w-full flex flex-col-reverse items-start justify-between gap-y-5 xl:flex-row">
                    <div id="epsiodes" className={`w-full grid ${(episodeNumbers <= 24) ? 'grid-cols-2 xl:grid-cols-4 ' : 'grid-cols-6 lg:grid-cols-8 xl:grid-cols-6'} gap-3 xl:gap-10 xl:w-4/5`}>
                        {episodeNumbers.slice(0, 100).map((number) => (
                            <Dwnbtn key={number} number={number} />
                        ))
                        }
                    </div>
                    <div id="quality" className="w-full grid grid-cols-3 gap-y-3 justify-items-center *:w-4/6 xl:w-1/6 xl:grid-cols-1 xl:gap-10">
                        <button className="p-3.5 px-0 bg-[#ededed] text-black rounded-md">1080</button>
                        <button className="p-3.5 px-0 bg-[#ededed] text-black rounded-md">720</button>
                        <button className="p-3.5 px-0 bg-[#ededed] text-black rounded-md">480</button>
                        <button className="p-3.5 px-0 bg-[#ededed] text-black rounded-md hidden xl:block"> Search <i className="fa-solid fa-magnifying-glass xl:ml-3"></i> </button>
                        <button className="p-3.5 px-0 bg-[#ededed] text-black rounded-md hidden xl:block"> Copy Links <i className="fa-regular fa-copy xl:ml-2"></i> </button>
                        <div className="col-start-1 col-span-3 flex gap-x-3 items-center xl:flex-col xl:hidden">
                            <button className="w-1/2 p-3.5 px-0 bg-[#ededed] text-black rounded-md block xl:hidden"> Search <i className="fa-solid fa-magnifying-glass xl:ml-3"></i> </button>
                            <button className="w-1/2 p-3.5 px-0 bg-[#ededed] text-black rounded-md block xl:hidden"> Copy Links <i className="fa-regular fa-copy xl:ml-2"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download;