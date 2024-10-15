import React from 'react';

const Card = ({ title, description, icon: Icon, href }) => {
    return (
        <div
            className="max-w-sm p-6 border rounded-lg shadow bg-[#b7b7b7] border-gray-700 hover:border-[#00df9a]">
            {Icon && <Icon className="w-7 h-7 text-gray-500 dark:text-[#525252] mb-3" aria-hidden="true" />}
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

export default Card;
