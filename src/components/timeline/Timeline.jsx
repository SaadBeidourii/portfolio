import React from 'react';

const TimelineItem = ({ icon, title, date, description, tag }) => {
    return (
        <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-[#b7b7b7] rounded-full -left-3">
                {icon}
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-black">
                {title} {tag && <span className="text-white text-sm font-medium ms-3 px-2.5 py-0.5 rounded bg-blue-900">{tag}</span>}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-[#8c8c8c]">
                {date}
            </time>
            <p className="mb-4 text-base font-normal">
                {description}
            </p>
        </li>
    );
}

export default TimelineItem;
