'use client'

import Link from '@/components/Link'
import { usePathname } from 'next/navigation'

interface Props {
    href: string
    title: string
    onClick: () => void
}

const MobileLinkWrapper = ({ href, title, onClick }: Props) => {

    const pathname = usePathname()

    return (
        <Link
            href={href}
            onClick={onClick}
            className={`text-2xl tracking-widest text-gray-900 hover:text-primary-600 dark:hover:text-green-400 ${((href === '/' && pathname === href) || (pathname.includes(href) && href !== '/')) ? 'font-extrabold text-primary-600 dark:text-green-400' : 'font-bold dark:text-gray-100'}`}
        >
            {title}
        </Link>
    )
}

export default MobileLinkWrapper
