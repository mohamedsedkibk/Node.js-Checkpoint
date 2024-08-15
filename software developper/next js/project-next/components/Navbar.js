import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <button className="p-2 text-blue-600/100">
                <Link href="/">
                    Home
                </Link>
            </button>
            <button className="p-2 text-blue-600/100">
                <Link href="/about">about</Link>
            </button>
            < button className="p-2 text-blue-600/100">
                <Link href="/contact">contact</Link>
            </button>

            <button className="p-2 text-blue-600/100">
                <Link href="/project">project</Link>
            </button>
        </div>
    )
}

export default Navbar