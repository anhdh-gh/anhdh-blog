'use client'

import Link from '@/components/Link'
import { usePathname } from 'next/navigation'

interface Props {
    href: string
    title: string
}

const LinkWrapper = ({ href, title }: Props) => {

    const pathname = usePathname()

    return (
        <Link
            href={href}
            className={`hidden text-gray-900 hover:text-primary-600 dark:text-gray-100 dark:hover:text-green-400 sm:block ${((href === '/' && pathname === href) || (pathname.includes(href) && href !== '/')) ? 'font-extrabold text-primary-600 dark:text-green-400' : 'font-medium'}`}
        >
            {title}
        </Link>
    )
}

export default LinkWrapper
