import React from 'react'
import About from './about/page'
import Features from './features/page'
import Encyclopedia from './encyclopedia/page'
import Upload from './upload/page'

export default function Homepage() {
    return (
        <div className="flex flex-col min-h-dvh bg-gray-300">
            <main className="flex-1">
                <Upload />
                <About />
                <Features />
                <Encyclopedia />
            </main>
        </div>
    )
}
