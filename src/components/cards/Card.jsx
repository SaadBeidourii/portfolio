import React from 'react';

const Card = ({ title, description, icon: Icon, href }) => {
    return (
        <div
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-[#00df9a]">
            {Icon && <Icon className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" />}
            <a href={href}>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-[#00df9a]">
                    {title}
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                {description}
            </p>
        </div>
    );
}

export default Card;
