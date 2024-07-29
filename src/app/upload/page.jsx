import React from 'react'
import { Button } from '@/components/ui/button'

export default function Upload() {
    return (
        <section className="w-full h-screen flex items-center justify-center pt-12 md:pt-24 lg:pt-32 border-y">
            <div className="container space-y-10 xl:space-y-16">
                <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                    <div className="flex flex-col items-center text-center space-y-4 md:items-start md:text-left">
                        <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                            Identify Herbal Plants with Ease
                        </h1>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">
                            Our advanced image recognition technology allows you
                            to quickly and accurately identify a wide range of
                            herbal plants. Simply upload an image and let our
                            app do the rest.
                        </p>
                        <div className="space-x-4 ">
                            <Button size="lg" className="bg-green-500">
                                <CameraIcon className="mr-2 h-5 w-5" />
                                Take Photo
                            </Button>
                            <Button size="lg" variant="outline">
                                <UploadIcon className="mr-2 h-5 w-5" />
                                Upload Image
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function CameraIcon(props) {
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
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
        </svg>
    )
}

function UploadIcon(props) {
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    )
}
