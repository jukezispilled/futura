import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import FAQComponent from './FAQ';
import Pricing from './Pricing';
import AnimatedShinyText from './components/magicui/shiny';

function WebDev() {
    const [currentStep, setCurrentStep] = useState(0);
    const tabularControlRef = useRef(null);

    const steps = [
        { label: 'Design', description: 'Design' },
        { label: 'Develop', description: 'Develop' },
        { label: 'Host + Maintain', description: 'Host + Maintain' },
        { label: 'SEO', description: 'SEO' },
    ];

    const handleStepClick = (index) => {
        setCurrentStep(index);
    };

    const handleShowMeClick = () => {
        tabularControlRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className="h-screen w-screen flex justify-center items-center overflow-x-clip">
                <div className="grid font-semibold font-custom">
                    <div className="text-center">
                        <div className="z-10 flex mb-2 items-center justify-center">
                            <div
                                className="group rounded-full border border-black/5 bg-white text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-100"
                            >
                                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 font-normal">
                                    <span className='font-custom1'>All your bases covered</span>
                                </AnimatedShinyText>
                            </div>
                        </div>
                        <div className="text-[115px] lg:text-[128px] leading-[.9] tracking-tight font-custom"><span className='block'>Full-Service</span><span className='block'>Websites</span></div>
                        <div className='w-full flex justify-center'>
                            <button 
                                className='bg-black hover:scale-105 transition ease-in-out duration-150 px-4 py-1.5 mt-1.5 text-[28px] text-white rounded-full font-custom2'
                                onClick={handleShowMeClick}
                            >
                                Show Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={tabularControlRef} className='relative h-[95vh] w-screen overflow-x-clip mt-[1%]'>
                <div className='bg-white h-full w-screen flex flex-col'>
                    <div className='flex justify-center mt-10'>
                        <TabularControl steps={steps} currentStep={currentStep} onStepClick={handleStepClick} />
                    </div>
                    <div className='flex-grow'>
                        <div className='flex justify-center items-center h-[70vh]'>
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className='text-8xl font-semibold flex'
                            >
                                {steps[currentStep].description}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <FAQComponent />
            <div className='h-screen w-screen flex justify-center items-center bg-white'>
                <Pricing />
            </div>
        </div>
    );
}

const TabularControl = ({ steps, currentStep, onStepClick }) => {
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const tabRefs = useRef([]);
    const containerRef = useRef(null);
  
    useEffect(() => {
      const updateIndicator = () => {
        const activeTab = tabRefs.current[currentStep];
        const container = containerRef.current;
        if (activeTab && container) {
          const containerRect = container.getBoundingClientRect();
          const tabRect = activeTab.getBoundingClientRect();
          setIndicatorStyle({
            width: `${tabRect.width}px`,
            transform: `translateX(${tabRect.left - containerRect.left}px)`,
            height: `${tabRect.height}px`,
            top: `${tabRect.top - containerRect.top}px`,
          });
        }
      };
  
      updateIndicator();
      window.addEventListener('resize', updateIndicator);
      return () => window.removeEventListener('resize', updateIndicator);
    }, [currentStep, steps]);
  
    return (
      <div ref={containerRef} className="relative inline-flex p-1 bg-gray-100 rounded-full">
        <div
          className="absolute bg-black rounded-full transition-all duration-300 ease-in-out"
          style={indicatorStyle}
        />
        {steps.map((step, index) => (
          <button
            key={index}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`relative z-10 ${
              currentStep === index ? 'text-white' : 'text-gray-500 hover:text-gray-700'
            } px-4 py-2 text-sm md:text-2xl font-medium transition-colors duration-150 rounded-lg focus:outline-none focus:shadow-outline`}
            onClick={() => onStepClick(index)}
          >
            {step.label}
          </button>
        ))}
      </div>
    );
};
  
export default WebDev;

/*
                    <div className="flex justify-center items-center w-full space-x-4 text-4xl -mt-[5%]">
                        <div className="relative bg-[#6A56E7]/15 w-[19vw] h-[24vh] rounded-lg border flex justify-center items-center overflow-clip">
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#6A56E7"
                                className="absolute -top-8 left-16 size-[275px] opacity-30"
                                whileHover={{ x: -7 }}
                                transition={{ duration: 0.3 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                            </motion.svg>
                            Design
                        </div>
                        <div className="relative bg-[#00CFFF]/15 w-[19vw] h-[24vh] rounded-lg border flex justify-center items-center overflow-clip">
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#00CFFF"
                                className="absolute top-4 left-3 size-[275px] opacity-30"
                                whileHover={{ x: -7 }}
                                transition={{ duration: 0.3 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </motion.svg>
                            <span className='z-10'>Develop</span>
                        </div>
                        <div className="relative bg-[#4CFB6B]/15 w-[19vw] h-[24vh] rounded-lg border flex justify-center items-center text-center overflow-clip">
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#4CFB6B"
                                className="absolute top-2 left-3 size-[275px] opacity-30"
                                whileHover={{ x: -7 }}
                                transition={{ duration: 0.3 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 1 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                            </motion.svg>
                            <div className='grid z-10'>Host + <span>Maintain</span></div>
                        </div>
                        <div className="relative bg-[#FFC246]/15 w-[19vw] h-[24vh] rounded-lg border flex justify-center items-center overflow-clip">
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#FFC246"
                                className="absolute top-2 left-3 size-[275px] opacity-30"
                                whileHover={{ x: -7 }}
                                transition={{ duration: 0.3 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 1 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </motion.svg>
                            <span className='z-10'>SEO</span>
                        </div>
                    </div>
*/