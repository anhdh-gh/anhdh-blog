'use client'

import { motion } from 'framer-motion'
import Link from '@/components/Link'
import { slug } from 'github-slugger'

interface Props {
    tagName: string
    count: number
}

const TagWrapper = ({ tagName, count }: Props) => {

    return (
        <Link
            href={`/tags/${slug(tagName)}`}
            aria-label={`View posts tagged ${tagName}`}
        >
            <motion.div
                id="TagWrapper-btn"
                className="flex flex-wrap gap-4"
                whileTap={{
                    scale: 0.8,
                    transition: { duration: 0.2 },
                }}
                whileHover={{ scale: 1.05 }}
            >
                <div
                    className="flex uppercase items-center justify-center rounded-md border dark:border-2 border-black dark:border-white py-2 px-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:text-green-400 dark:hover:text-green-300"
                    aria-label={`View posts tagged ${tagName}`}
                >
                    {tagName} <span className='ps-2 text-black dark:text-white'>({count})</span>
                </div>
            </motion.div>
        </Link>
    )
}

export default TagWrapper
