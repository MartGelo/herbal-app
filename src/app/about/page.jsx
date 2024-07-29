import React from 'react'
import Link from 'next/link'

export default function About() {
    return (
        <section className="w-full h-screen py-12 md:py-24 lg:py-32" id="about">
            <div className="container space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                            Herbal Image Recognition
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Identify Herbs with Precision
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our advanced image recognition technology can
                            identify a wide range of herbal plants with
                            incredible accuracy. Simply upload an image and let
                            our app do the rest.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Easy to Use</h3>
                        <p className="text-sm text-muted-foreground">
                            Our intuitive interface makes it simple to upload
                            and identify herbal plants.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Accurate Results</h3>
                        <p className="text-sm text-muted-foreground">
                            Our advanced AI algorithms ensure accurate
                            identification of even the most obscure herbal
                            plants.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">
                            Extensive Database
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Our database covers a wide range of herbal plants,
                            from common to rare species.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Real-time Results</h3>
                        <p className="text-sm text-muted-foreground">
                            Get instant identification results as soon as you
                            upload an image.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">
                            Personalized Insights
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Receive detailed information about the identified
                            herbal plant, including its properties and uses.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Mobile Friendly</h3>
                        <p className="text-sm text-muted-foreground">
                            Access our app from any device, whether you're at
                            home or on the go.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Link
                            href="#"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}>
                            Try it Now
                        </Link>
                        <Link
                            href="#"
                            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}>
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
