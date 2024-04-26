import Link from "next/link";
import WordMark from "@/components/WordMark";

export default function Header() {
    return (
        <div>
            <Link href={"/"}>
                <WordMark />
                <span className="sr-only">Glisten.ai Homepage</span>
            </Link>
        </div>
    )
}
