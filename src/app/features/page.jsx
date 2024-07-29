import React from 'react'

export default function Features() {
    return (
        <section
            className="w-full h-screen py-12 md:py-24 lg:py-32"
            id="features">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                            Key Features
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Discover the Power of Herbal Image Recognition
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our app offers a range of advanced features to help
                            you identify and learn about herbal plants with
                            ease.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <ul className="grid gap-6">
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        Accurate Identification
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Our advanced AI algorithms ensure
                                        precise identification of even the most
                                        obscure herbal plants.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        Detailed Information
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Receive comprehensive details about the
                                        identified herbal plant, including its
                                        properties and uses.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        Extensive Database
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Our database covers a wide range of
                                        herbal plants, from common to rare
                                        species.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <img
                        src="/herbal.jpg"
                        width={550}
                        height={310}
                        alt="Herbal Plant"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                    />
                </div>
            </div>
        </section>
    )
}
