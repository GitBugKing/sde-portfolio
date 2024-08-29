"use client";
import React from 'react';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffectSmooth } from "@/components/ui/typewrter-effect";

const testimonials = [
    {
        quote:
            ['Developed MVP version user-end business website, aiming to provide members with personalized nutrition recommendations by AI.'],
        name: "Software Engineer, Daily Supplies, Vancouver",
        title: "May, 2024 - Present",
    },
    {
        quote:
            ['● Completed the first milestone of development of a dating App for the target customers who need a safer dating platform.'],
        name: "Software Engineer, Defend, Vancouver",
        title: "May, 2023 - May, 2024",
    },
    {
        quote:
            ['● Led a team of 3 data engineers and 3 projects in designing and implementing scalable data solutions to support various business functions. Discussed customer needs and documented their requirements for projects, ensuring all data solutions met customer expectations.'],
        name: "Data Engineer Team Lead, Rainer Technology, Beijing",
        title: "Oct, 2019 - Jun, 2021",
    },
    {
        quote:
            ['● Managed BI dashboards showcase government key metrics, supporting management adjustment.',
                '● Established data warehouses to ensure data consistency from business systems to dashboards, meeting the government data standards.'],
        name: "BI Engineer, Huaxia Diantong IT, Beijing",
        title: "Jun, 2019 - Oct, 2019",
    },
    {
        quote:
            ['● Led a team of 2 student developers in developing and optimizing university website, providing technical mentorship.'],
        name: "Technical Support, Guangxi Normal University, Guilin",
        title: "Jan, 2017 - May, 2019",
    }
];

const words = [{ text: "Experience" }]

const ExperienceCard = () => {
    return (
        <div
            className="relative w-full mt-16 flex flex-col items-center"
            id="experience"
        >
            <TypewriterEffectSmooth words={words} />
            <p className="text-neutral-500 text-sm w-1/2 mb-4 mt-8 dark:text-neutral-300">
                I have over 7 years of professional experience as a software engineer, with expertise in data integration and web development across the Financial, Government, Entertainment, and Consumer industries.
            </p>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
                className="mt-10"
            />
        </div>
    );
};

export default ExperienceCard;




