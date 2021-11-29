import React from 'react';
import { Typography } from 'antd';
import Typewriter from "typewriter-effect";

const { Title } = Typography;

const Info = () => {
    return (
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(1000)
                        .typeString("Hello There")
                        .pauseFor(4000)
                        .deleteAll()
                        .start();
                }}
            />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(1500)
                        .typeString("I am Asif Hassan")
                        .pauseFor(4000)
                        .deleteAll()
                        .start();
                }}
            />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(2000)
                        .typeString("Frontend Web Developer in MERN stack")
                        .pauseFor(4000)
                        .deleteAll()
                        .start();
                }}
            />
        </div>
    );
};

export default Info;