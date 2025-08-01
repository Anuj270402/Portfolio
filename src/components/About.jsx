import React from 'react';
import { useSpring } from 'react-spring';

const About = () => {
    const headerProps = useSpring({
        from : {opacity : 0, transform : "translateY(-50px)"},
        to : {opacity : 1, transform : "translateY(0px)"},
        config : {duration : 800} ,
    })
    const sectionProps = useSpring({
        from : {opacity : 0, transform : "translateY"},
        to : {opacity : 1 , transform : "translateY(0)"},
        config : {tension:120 , friction : 14},
    });

    return (
        <div id="about" className='bg-gradient-to-br from-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden'>
            <div className='max-w-6xl mx-auto'>
                <animated.div style={headerProps} className='text-center mb-12'>
                    <h1 className='text-4xl sm:text-5xl md : text-6xl font-extrabold 
                    text-transparent bg-clip-text bg-gradient-to-r from-indigo-600
                     to-purple-600 animate-pulse'>
                    About Me 
                    </h1>
                    <p className='mt-4 text-xl text-gray-600 max-w-2xl mx-auto animate-bounce duration-1000'>
                        
                    </p>
                </animated.div>

            </div>
            
        </div>
    );
};

export default About;