"use client";

import Link from "next/link";
import WordMark from "./WordMark";

export default function NavBar() {
    return (
        <Link href={"/"}>
            <WordMark />
            <span className="sr-only">Glisten.ai Homepage</span>
        </Link>
    )
}
