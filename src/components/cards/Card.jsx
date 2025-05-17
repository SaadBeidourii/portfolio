
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, X, ExternalLink } from "lucide-react"

const Card = ({ title, status, description, icon: Icon, href, githubLink }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <>
            <motion.div
                className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group cursor-pointer"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onClick={openModal}
            >
                <div className="absolute h-1 w-full bg-gradient-to-r from-[#2a6a55] to-emerald-400 top-0"></div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                            {Icon && <Icon className="w-6 h-6 text-[#2a6a55]" aria-hidden="true" />}
                        </div>
                        {status === "In Progress" && <StatusBullet />}
                    </div>
                    <div className="block group-hover:text-[#2a6a55] transition-colors duration-200">
                        <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-600 dark:text-gray-300 line-clamp-3">{description}</p>

                    <div className="pt-2 flex items-center justify-between">
                        <div>
                            {href && (
                                <span className="inline-flex items-center text-sm font-medium text-[#2a6a55]">
                  View Project
                  <svg
                      className="w-3 h-3 ms-2.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                  >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </span>
                            )}
                        </div>

                        {githubLink && (
                            <div
                                className="inline-flex items-center p-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Github size={18} />
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Project Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <ProjectModal
                        title={title}
                        description={description}
                        status={status}
                        icon={Icon}
                        href={href}
                        githubLink={githubLink}
                        onClose={closeModal}
                    />
                )}
            </AnimatePresence>
        </>
    )
}

const ProjectModal = ({ title, description, status, icon: Icon, href, githubLink, onClose }) => {
    // Close modal when clicking outside
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
        >
            <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
                <div className="relative">
                    <div className="absolute h-1 w-full bg-gradient-to-r from-[#2a6a55] to-emerald-400 top-0 rounded-t-xl"></div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        aria-label="Close modal"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="p-6 pt-12">
                    <div className="flex items-center gap-4 mb-6">
                        {Icon && (
                            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                <Icon className="w-8 h-8 text-[#2a6a55]" aria-hidden="true" />
                            </div>
                        )}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
                            {status === "In Progress" && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#2a6a55] text-white mt-1">
                  In Progress
                </span>
                            )}
                        </div>
                    </div>

                    <div className="prose dark:prose-invert max-w-none mb-8">
                        <p className="text-gray-600 dark:text-gray-300">{description}</p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {href && (
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-[#2a6a55] text-white rounded-lg hover:bg-[#225544] transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink size={16} className="mr-2" />
                                View Project
                            </a>
                        )}
                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 border border-[#2a6a55] text-[#2a6a55] rounded-lg hover:bg-[#2a6a55]/10 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Github size={16} className="mr-2" />
                                View on GitHub
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

const StatusBullet = () => (
    <div className="relative inline-flex group">
        <span className="px-2 py-1 text-xs font-medium text-white bg-[#2a6a55] rounded-full">In Progress</span>
    </div>
)

export default Card
