import Image from "next/image"
import Link from "next/link"

const LeftSidebar = () => {
    return (
        <section className="left_sidebar">
            <nav className="flex flex-col gap-6">
                <Link href="/">
                    <Image src="" />
                </Link>
            </nav>
        </section>
    )
}

export default LeftSidebar