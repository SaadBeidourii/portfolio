import React from 'react';

const TimelineItem = ({ icon, title, date, description, tag }) => {
    return (
        <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full -left-3  dark:bg-[#00df9a]">
                {icon}
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {title} {tag && <span className="bg-blue-100 text-blue-800 text-sm font-medium ms-3 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{tag}</span>}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {date}
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {description}
            </p>
        </li>
    );
}

export default TimelineItem;
