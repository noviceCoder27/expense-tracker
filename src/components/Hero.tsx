import Image from "next/image"
import Link from "next/link"


const Hero = () => {
  return (
    <section className="bg-gray-50">
        <div className="mx-auto flex  flex-col items-center gap-10 px-4 py-32 ">
            <div className="mx-auto text-center">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                    Manage Your Expense
                    <strong className="font-extrabold text-blue-700 sm:block"> Control Your Money. </strong>
                </h1>
                <p className="mt-4 sm:text-xl/relaxed">
                    Start creating your budget a save a ton of money
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link
                    className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                    href="/dashboard"
                    >
                    Get Started
                    </Link>
                </div>
            </div>
            <Image src = "/dashboard.png" alt = "Dashboard Image" width= "0" height = "0" sizes = "100vw" className = "w-[80vw] "/>
        </div>
    </section>
  )
}

export default Hero
