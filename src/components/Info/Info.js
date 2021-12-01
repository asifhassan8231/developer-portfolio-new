import React from 'react';
import Typewriter from "typewriter-effect";

const Info = () => {

    return (
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360, fontSize: '40px', fontFamily: 'monospace', fontWeight: 'bold' }}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(1000)
                        .typeString("Hello There 👋")
                        .pauseFor(4000)
                        .start();
                }}
            />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(2000)
                        .typeString("I Am Asif Hassan 🧑🏻")
                        .pauseFor(4000)
                        .start();
                }}
            />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(3000)
                        .typeString("A Frontend Web Developer 👨🏻‍💻")
                        .pauseFor(4000)
                        .start();
                }}
            />
        </div>
    );
};

export default Info;