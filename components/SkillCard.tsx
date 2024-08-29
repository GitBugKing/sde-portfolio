import React from 'react';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { TypewriterEffectSmooth } from "@/components/ui/typewrter-effect";

const SkillCard = () => {
    const skills1 = [
        {
            id: 1,
            name: "Next.js",
            image: "/nextjs.png"
        }, {
            id: 2,
            name: "React.js",
            image: "/react-logo.png"
        }, {
            id: 3,
            name: "Tailwind",
            image: "/tailwind.png"
        }, {
            id: 4,
            name: "JavaScript",
            image: "/js.png"
        }, {
            id: 5,
            name: "HTML",
            image: "/html.png"
        }, {
            id: 6,
            name: "CSS",
            image: "/css.png"
        }, {
            id: 7,
            name: "MUI",
            image: "/Material UI.png"
        }, {
            id: 8,
            name: "Figma",
            image: "/Figma.png"
        }
    ];
    const skills2 = [
        {
            id: 1,
            name: "Java",
            image: "/java.png"
        }, {
            id: 2,
            name: "Spring",
            image: "/Spring.png"
        }, {
            id: 3,
            name: "MySQL",
            image: "/MySQL.png"
        }, {
            id: 4,
            name: "AWS",
            image: "/AWS.png"
        }, {
            id: 5,
            name: "Docker",
            image: "/Docker.png"
        }, {
            id: 6,
            name: "Apache Tomcat",
            image: "/Apache Tomcat.png"
        }, {
            id: 7,
            name: "Kubernetes",
            image: "/Kubernetes.png"
        }, {
            id: 8,
            name: "Git",
            image: "/Git.png"
        }, {
            id: 9,
            name: "Python",
            image: "/python.png"
        }, {
            id: 10,
            name: "RabbitMQ",
            image: "/RabbitMQ.png"
        }
    ];

    const words = [{ text: "Skill" }]
    return (
        <div
            className="relative w-full mt-12 flex flex-col items-center"
            id="skill"
        >
            <TypewriterEffectSmooth words={words} />
            <p className="text-neutral-500 text-sm w-1/2 mb-4 mt-8 dark:text-neutral-300">
                Proficiency in programming languages such as JavaScript(TypeScript),Python and Java. Familiar with front-end frameworks such as Next.js and React.js and back-end frameworks like SpringBoot and MyBatis, combined with various full-stack tools to build and maintain systems.
            </p>
            <div className="flex flex-col mt-16 gap-16 justify-center items-center">
                <div className="flex">
                    <AnimatedTooltip items={skills1} />
                </div>
                <div className="flex">
                    <AnimatedTooltip items={skills2} />
                </div>
            </div>
        </div>
    );
};

export default SkillCard;