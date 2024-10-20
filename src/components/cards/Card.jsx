import React from 'react';

const Card = ({ title, status, description, icon: Icon, href }) => {
    return (
        <div className="max-w-sm p-6 border rounded-lg shadow bg-[#b7b7b7] border-gray-700 hover:border-[#2a6a55]">
            <div className="flex items-center justify-between">
                {Icon && <Icon className="w-7 h-7 text-[#525252]" aria-hidden="true" />}
                {status === "In Progress" && <StatusBullet />}
            </div>
            <a href={href}>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black">
                    {title}
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-[#525252]">
                {description}
            </p>
        </div>
    );
}

const StatusBullet = () => (
    <div className="relative inline-flex group">
        <span className="px-2 py-1 w-auto max-w-xs text-sm font-bold text-black bg-[#e8e8e8] rounded shadow opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            In Progress
        </span>
        <span className="text-green-600 text-5xl">&#8226;</span>
    </div>
);



export default Card;
