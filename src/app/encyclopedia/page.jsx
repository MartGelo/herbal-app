import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Encyclopedia() {
    return (
        <section
            className="w-full h-screen py-12 md:py-24 lg:py-32"
            id="encyclopedia">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col items-center justify-center">
                        <Card className="w-full max-w-md">
                            <CardContent className="flex flex-col items-center justify-center p-8">
                                <LeafIcon className="mb-4 h-12 w-12 text-primary" />
                                <h3 className="mb-2 text-2xl font-bold">
                                    Herb Encyclopedia
                                </h3>
                                <p className="mb-4 text-muted-foreground">
                                    Explore our extensive database of herbal
                                    knowledge.
                                </p>
                                <Button size="lg" className="bg-green-500">
                                    <BookOpenIcon className="mr-2 h-5 w-5" />
                                    Browse Herbs
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Discover the Power of Herbs
                            </h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Learn about the medicinal and culinary uses of
                                various herbs, their health benefits, and how to
                                incorporate them into your daily life.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row ">
                            <Link
                                href="#"
                                className="inline-flex bg-white h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-black-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}>
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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

function BookOpenIcon(props) {
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
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    )
}
