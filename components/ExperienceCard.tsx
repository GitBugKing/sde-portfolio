"use client";
import React from 'react';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffectSmooth } from "@/components/ui/typewrter-effect";

const testimonials = [
    {
        quote:
            ['●	Developed the MVP version of the AI-powered user-end business website applied React.js framework, which aims to provide members with personalized nutrition recommendations using AI',
             '●	Utilized HTML, CSS and Typescript to develop and fix over 10 components in 5+ responsive landing pages',
             '●	Implemented Figma UI/UX design using Material UI component library, increasing development efficiency by 30%',
             '●	Collaborated with a Scrum-based team, managing code versioning and concurrent development using Git',
             '●	Implemented the Order History feature, allowing users to track and view their past orders, improving user engagement',
             '●	Optimized the Nav Bar feature for both desktop and mobile responsiveness, enhancing user interface functionality'],
        name: " Grouppers, Vancouver",
        title: "Full-stack Engineer,",
    },
    {
        quote:
            ['● Leveraged data to drive insights that support clinical research, streamline the process of analyzing patient data and medication usage, and enable decision-makers to understand trends and outcomes, ultimately improving patient care',
             '●	Implemented data cleaning including handle Missing Value, duplicates, and outliers using Python (Pandas, NumPy) to provide 3+ cleaned dataset to analyze effectiveness of medication, increasing data consistency by 17%',
             '●	Performed ad-hoc analysis through extracting 400MB+ data from Caboodle database from EPIC system, optimized SQL queries which increasing executing speed by 20%'],
        name: "Glocal Foundation, Inc, Vancouver",
        title: "Sr. Data Engineer, Analytics",
    },
    {
        quote:
            ['● Designed Customer Scoring System by segmenting and tagging customers using the RFM model, addressing data skewness through feature engineering to enhance segmentation accuracy and improve system performance',
             '● Leveraged the Python Scikit-Learn library to forecast membership type sales by fitting models including ARIMA, SARIMA, Linear Regression, and Decision Tree, achieving 78% accuracy, with LR showing the best fit'],
        name: "Defend Technology, Inc, Beijing",
        title: "Data Engineer, Analytics II",
    },
    {
        quote:
            ['● Achieved banking digital transformation and data ETL pipeline via stored procedures development in DB2',
             '● Automate data loading and logging processes through Shell scripts resulting in 1 FTE saving'],
        name: "Rainer Technology, Inc, Beijing",
        title: "Data Engineer, Analytics I",
    },
    {
        quote:
            ['● Led a team of 2 student developers in developing and optimizing university website, providing technical mentorship.',
             '● Developed and maintained MVC structure back-end code using SpringBoot framework, managing data in MySQL database'
            ],
        name: "Guangxi Normal University, Guilin",
        title: "Web Developer",
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




