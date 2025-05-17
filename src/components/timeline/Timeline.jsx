import { motion } from "framer-motion"

const TimelineItem = ({ icon, title, date, description, tag }) => {
    return (
        <motion.li
            className="mb-10 ms-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
        >
      <span className="absolute flex items-center justify-center w-8 h-8 bg-[#2a6a55] text-white rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
        {icon}
      </span>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 ml-4">
                <h3 className="flex items-center mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    {title}
                    {tag && <span className="bg-[#2a6a55] text-white text-xs font-medium ms-3 px-2.5 py-0.5 rounded">{tag}</span>}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">{date}</time>
                <p className="mb-2 text-base font-normal text-gray-600 dark:text-gray-300">{description}</p>
            </div>
        </motion.li>
    )
}

export default TimelineItem
