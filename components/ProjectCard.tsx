import React from 'react';
import { TypewriterEffectSmooth } from "@/components/ui/typewrter-effect";
import { ThreeDCardDemo } from "@/components/ThreeDCard";

const ProjectCard = () => {
    const words = [{ text: "Project" }]
    const bank = {
        title: "Daily Supplies - Frontend",
        desc: "React.js framework, managed the user-end website including features Order History check, Order Status Management and Account Wish List.",
        git: "https://github.com/Grouppers/supplements-website",
        link: "#"
    }
    const bms = {
        title: "Daily Supplies - Backend",
        desc: "Express.js framework to managed backend operations, including JWT to secure account management, processing product data in MongoDB and building RESTful APIs.",
        git: "https://github.com/Grouppers/supplements-core",
        link: "#"
    }
    const mac = {
        title: "My Portfolio Site",
        desc: "Next.js framework, displayed my experience and representative projects.",
        git: "https://github.com/GitBugKing/sde-portfolio",
        link: "#"
    }

    return (
        <div
            className="relative w-full mt-16 flex flex-col items-center"
            id={"project"}
        >
            <TypewriterEffectSmooth words={words} />
            <div className="flex w-full items-center gap-8 justify-center">
                <div className="w-1/3">
                    <ThreeDCardDemo img={"/Daily_Supplies.jpg"} pro={bank} />
                </div>
                <div className="w-1/3">
                    <ThreeDCardDemo img={"/Daily_Supplies_2.jpg"} pro={bms} />
                </div>
                <div className="w-1/3">
                    <ThreeDCardDemo img={"/sde-site.png"} pro={mac} />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;


