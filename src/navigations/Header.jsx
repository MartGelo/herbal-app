import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-green-500 shadow px-4 lg:px-6 h-14 flex items-center">
            <Link
                href="#"
                className="flex items-center justify-center"
                prefetch={false}>
                <LeafIcon className="size-6 text-white" />
                <span className="sr-only">Herbal Image Recognition</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6 text-white">
                <Link
                    href="#about"
                    className="text-sm font-medium hover:underline underline-offset-4"
                    prefetch={false}>
                    About
                </Link>
                <Link
                    href="#features"
                    className="text-sm font-medium hover:underline underline-offset-4"
                    prefetch={false}>
                    Features
                </Link>
                <Link
                    href="#encyclopedia"
                    className="text-sm font-medium hover:underline underline-offset-4"
                    prefetch={false}>
                    Encyclopedia
                </Link>
            </nav>
        </header>
    )
}

function LeafIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
    )
}
