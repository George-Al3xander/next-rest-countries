"use client"

import Link from "next/link"


const btnStyles = "bg-primary py-2 px-4  text-2xl  shadow border-font rounded  font-semibold hover:opacity-70 transition-all duration-150"


const error = ({
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }) => (<div className="w-[100%] min-h-[30vh] flex flex-col gap-10 justify-center items-center">
    <h3 className="text-semibold text-xl capitalize opacity-70">There was a problem</h3>
    <h1 className="text-bold text-4xl capitalize opacity-70">{error.message ?? "Something went wrong"} </h1>
  <div className="flex gap-6">
      <Link className={btnStyles} href={"/"}>Home</Link>
      <button className={btnStyles} onClick={() => reset()}>Try again</button>
  </div>
  </div>)
export default error