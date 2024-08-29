"use client";
import React, {ReactNode} from "react";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const ba =
    <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Bachelor Degree</h2>
        <p>Guangxi Normal University, China</p>
        <p className="text-base">Bachelor of Science in Computer Science</p>
        <p>GPA:3.53/4.0</p>
        <p className="text-base">Course: Computer Network, Operation System, Database, Object-Oriented Programming </p>
        <p>Sep 2016 - Jul 2020</p>
    </div>

const ms =
    <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Master Degree</h2>
        <p>University of Nottingham, UK</p>
        <p className="text-base">Master of Science in Artificial Intelligence</p>
        <p>Graduation with: Merit</p>
        <p className="text-base">Course: Machine Learning, Advanced Data Structure and Algorithms, Data Modeling and Analysis </p>
        <p>Sep 2021 - Dec 2022</p>
    </div>

export function RevealCards() {
    return (
        <div className="mt-16 mb-8 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-transparent w-full gap-4 mx-auto px-8">
            <Card outText="Bachelor Degree" inText={ba} logo={"/GNU-logo.jpg"} size={150} />
            <Card outText="Master Degree" inText={ms} logo={"/UoN-logo.jpg"} size={300} />
        </div>
    );
}

const Card = ({
        outText,
        inText,
        logo,
        size,
        children,
    }: {
    outText: string;
    inText: ReactNode;
    logo: string;
    size: number;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="text-center text-2xl font-bold group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-300 w-full mx-auto flex flex-col items-center justify-center absolute inset-0 z-10 gap-12">
                    {outText}
                    <div className="w-3/5 h-40 overflow-hidden flex justify-center items-center">
                        <Image src={logo} alt="school logo" width={size} height={size} />
                    </div>
                </div>
                <div className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-300">
                    {inText}
                </div>
            </div>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
