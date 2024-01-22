"use client"
import { usePathname, useRouter } from "next/navigation"
import { IoMdArrowRoundBack } from "react-icons/io";



const BackBtn = () => {
    const router = useRouter()
    const pathname = usePathname()

    if(pathname == "/") return null

    return(<button className="my-10 bg-primary py-2 px-4  flex items-center gap-1 text-2xl  shadow border-font rounded  font-semibold hover:opacity-70 transition-all duration-150"   onClick={() => router.back()}>
        <IoMdArrowRoundBack size={25}/>
        <h3>Back</h3>
    </button>)
}

export default BackBtn