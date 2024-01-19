"use client"
import { usePathname, useRouter } from "next/navigation"




const BackBtn = () => {
    const router = useRouter()
    const pathname = usePathname()

    if(pathname == "/") return null

    return(<button onClick={() => router.back()}>Back</button>)
}

export default BackBtn